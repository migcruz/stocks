from __future__ import unicode_literals

from django.db import models
from django.contrib.postgres.fields import JSONField, ArrayField

from django.core.serializers.json import DjangoJSONEncoder

# Create your models here.
# TO RESET DB FOLLOW THIS https://stackoverflow.com/questions/23755523/how-to-reset-migrations-in-django-1-7

# manage.py migrate <app-name> zero to clear migrations table, 
# then remove <app-name>/migrations/ >>folder<< or contents. Then manage.py makemigrations <app-name> 
# and finally do manage.py migrate <app-name>. 
# This will tidy up your migrations without making other database changes.
# Then change something in model like a default > makemigrations>migrate then revert change and makeigrations>migrate again


#To NUKE DB: sudo su postgres > psql > DROP DATABASE <dbname> (allcaps) > recreate db that you want and start over

# AP SCHEDULER HEROKU TO RUN TASKS ON SERVER DJANGO
class Company(models.Model):
    ticker = models.CharField(max_length=50, default="")
    name = models.CharField(max_length=50, default="")
    marketcap = models.BigIntegerField(default=0)
    open_price = models.FloatField(default=0.0)
    close_price = models.FloatField(default=0.0)
    financials = JSONField()
    time_series_daily = JSONField(encoder=DjangoJSONEncoder)
    def __unicode__(self):
        return self.ticker

# class CompanyCompact(models.Model):
#     ticker = models.CharField(max_length=50, default="")
#     name = models.CharField(max_length=50, default="")
#     marketcap = models.BigIntegerField(default=0)
#     open_price = models.FloatField(default=0.0)
#     close_price = models.FloatField(default=0.0)
#     time_series_daily = JSONField()
#     financials = JSONField()

#     def __unicode__(self):
#         return self.ticker








# class Ability(models.Model):
# 	created_order = models.IntegerField(default=0)
# 	hero = models.ForeignKey(Hero, related_name='abilities', on_delete=models.CASCADE)
# 	ability_name = models.CharField(max_length=50, default="")
# 	heroid = models.IntegerField(default=0)
# 	ability_info = JSONField()
	
# 	class Meta:
# 		ordering = ('created_order',) # Allows abilities to be displayed in order in DRF

# 	def __unicode__(self):
# 		return self.ability_name
