from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'gr8notepad.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^$', 'notepad.views.index_view',name='index'),
)
