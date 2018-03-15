from django.conf.urls import url, include
from django.contrib.auth.views import login, logout_then_login
from django.contrib import admin

from .views import app, index, home, app2

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include('urls')),
    url(r'^app/', app, name='app'),
    url(r'^app2/', app2, name='app2'),
    url('^auth/login/$', login, name='login'),
    url('^auth/logout/$', logout_then_login, name='logout'),
    url('^$', index, name='index'),
    url('^login/$', home, name='home'),
]
