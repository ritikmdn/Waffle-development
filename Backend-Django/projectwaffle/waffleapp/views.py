from rest_framework import generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from .models import Article, Poll, PollOption
from .serializers import ArticleSerializer, PollSerializer, PollOptionSerializer
from .permissions import IsSuperUser

@permission_classes([IsSuperUser])
class ArticleList(generics.ListCreateAPIView):
    serializer_class = ArticleSerializer

    def get(self, request):
        articles = Article.objects.all().order_by('-timestamp')
        paginator = Paginator(articles, 2)  # Show 20 articles per page

        page = request.query_params.get('page')
        try:
            articles = paginator.page(page)
        except PageNotAnInteger:
            # If page is not an integer, deliver first page.
            articles = paginator.page(1)
        except EmptyPage:
            # If page is out of range (e.g. 9999), deliver last page of results.
            articles = paginator.page(paginator.num_pages)

        serializer = self.get_serializer(articles, many=True)
        
        # Add has_next and has_previous to the response
        return Response({
            'has_next': articles.has_next(),
            'has_previous': articles.has_previous(),
            'results': serializer.data
        })

@permission_classes([IsSuperUser])
class PollList(generics.ListCreateAPIView):
    queryset = Poll.objects.all()
    serializer_class = PollSerializer

@permission_classes([IsSuperUser])
class PollOptionList(generics.ListCreateAPIView):
    queryset = PollOption.objects.all()
    serializer_class = PollOptionSerializer

@api_view(['POST'])
@permission_classes([IsSuperUser])
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