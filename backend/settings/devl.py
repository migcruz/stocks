import os

from .common import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '!=e#fu86u_q50u2$(f^f(6=@uwhlz@79)7qo8o=$&7$=s71apx'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'USER': '',
        'NAME': 'stocks',
    }
}

INTERNAL_IPS = ['192.168.56.1']

INSTALLED_APPS += (
    'autofixture',
)

STATICFILES_DIRS.append(
    os.path.join(BASE_DIR, os.pardir, 'frontend', 'build'),
)

# Update database configuration with $DATABASE_URL. From https://devcenter.heroku.com/articles/django-app-configuration
import dj_database_url
db_from_env = dj_database_url.config(conn_max_age=500) #
DATABASES['default'].update(db_from_env) #