from django.contrib import admin
from .models import Article, Poll, PollOption, PollResult

admin.site.register(Article)
admin.site.register(Poll)
admin.site.register(PollOption)
admin.site.register(PollResult)