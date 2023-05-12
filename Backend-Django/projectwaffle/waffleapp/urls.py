from django.urls import path
from .views import ArticleList, PollList, PollOptionList, vote

urlpatterns = [
    path('articles/', ArticleList.as_view(), name='article_list'),
    path('polls/', PollList.as_view(), name='poll_list'),
    path('options/', PollOptionList.as_view(), name='poll_option_list'),
    path('vote/', vote, name='vote'),
    # path('results/', PollResultList.as_view(), name='poll_result_list'),
]
