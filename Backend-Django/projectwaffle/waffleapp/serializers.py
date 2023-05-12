from rest_framework import serializers
from .models import Article, Poll, PollOption

class PollOptionSerializer(serializers.ModelSerializer):
    percent_votes = serializers.SerializerMethodField()
    
    class Meta:
        model = PollOption
        fields = ['id', 'option', 'poll','percent_votes']

    def get_percent_votes(self, obj):
        total_votes = sum([option.votes for option in obj.poll.options.all()])
        if total_votes > 0:
            return (obj.votes / total_votes) * 100
        return 0

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