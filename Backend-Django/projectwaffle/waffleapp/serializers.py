from rest_framework import serializers
from .models import Article, Poll, PollOption

class PollOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PollOption
        fields = ['id', 'option', 'poll']

class PollSerializer(serializers.ModelSerializer):
    options = PollOptionSerializer(many=True, read_only=True)
    class Meta:
        model = Poll
        fields = ['id', 'article', 'question', 'options']

class ArticleSerializer(serializers.ModelSerializer):
    polls = PollSerializer(many=True, read_only=True)
    class Meta:
        model = Article
        fields = ['id', 'category', 'headline', 'content', 'image_url', 'timestamp', 'polls']