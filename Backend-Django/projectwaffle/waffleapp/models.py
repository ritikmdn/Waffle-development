from django.db import models
from django.utils import timezone
import uuid

class Article(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    category = models.CharField(max_length=25, default="Miscellaneous")
    headline = models.CharField(max_length=200, default="Headline")
    content = models.CharField(max_length=2000, default="Lorem Ipsum")
    image_url = models.CharField(max_length=300, default="Image URL")
    timestamp = models.DateTimeField(default=timezone.now)
    # poll = models.OneToOneField(poll, on_delete=models.CASCADE, related_name='article')

    def __str__(self):
        return self.headline


class Poll(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    article = models.ForeignKey(Article, related_name='polls', on_delete=models.CASCADE)
    question = models.CharField(max_length=250, default="Poll question")

    def __str__(self):
        return self.question


class PollOption(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    poll = models.ForeignKey(Poll, related_name='options', on_delete=models.CASCADE)
    option = models.CharField(max_length=200, default="Poll question")
    votes = models.IntegerField(default=0)    

    def __str__(self):
        return self.option


# class PollResult(models.Model):
#     id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
#     poll_option = models.OneToOneField(PollOption, on_delete=models.CASCADE)
#     votes = models.IntegerField(default=0)

    # def __str__(self):
    #     return str(self.user_id)