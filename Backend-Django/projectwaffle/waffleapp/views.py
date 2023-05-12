from django.shortcuts import render
from rest_framework import generics
from .models import Article, Poll, PollOption
from .serializers import ArticleSerializer, PollSerializer, PollOptionSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

class ArticleList(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class PollList(generics.ListCreateAPIView):
    queryset = Poll.objects.all()
    serializer_class = PollSerializer

class PollOptionList(generics.ListCreateAPIView):
    queryset = PollOption.objects.all()
    serializer_class = PollOptionSerializer

@api_view(['POST'])
def vote(request):
    poll_option_id = request.data.get('poll_option_id')
    try:
        poll_result = PollOption.objects.get(id=poll_option_id)
        poll_result.votes += 1
        poll_result.save()
    except PollOption.DoesNotExist:
        # Check if the PollOption exists
        try:
            poll_option = PollOption.objects.get(id=poll_option_id)
            # If it exists, create a new PollResult for it with 1 vote
            poll_result = PollOption.objects.create(poll_option=poll_option, votes=1)
        except PollOption.DoesNotExist:
            # If the PollOption doesn't exist, return a 404 error
            return Response({'error': 'Poll option not found.'}, status=404)

    return Response({'votes': poll_result.votes})