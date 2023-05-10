from django.shortcuts import render
from rest_framework import generics
from .models import Article, Poll, PollOption
from .serializers import ArticleSerializer, PollSerializer, PollOptionSerializer

class ArticleList(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class PollList(generics.ListCreateAPIView):
    queryset = Poll.objects.all()
    serializer_class = PollSerializer

class PollOptionList(generics.ListCreateAPIView):
    queryset = PollOption.objects.all()
    serializer_class = PollOptionSerializer