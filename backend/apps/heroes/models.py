from __future__ import unicode_literals

from django.db import models
from django.contrib.postgres.fields import JSONField, ArrayField

# Create your models here.
# TO RESET DB FOLLOW THIS https://stackoverflow.com/questions/23755523/how-to-reset-migrations-in-django-1-7

# manage.py migrate <app-name> zero to clear migrations table, 
# then remove <app-name>/migrations/ >>folder<< or contents. Then manage.py makemigrations <app-name> 
# and finally do manage.py migrate <app-name>. 
# This will tidy up your migrations without making other database changes.
# Then change something in model like a default > makemigrations>migrate then revert change and makeigrations>migrate again


#To NUKE DB: sudo su postgres > psql > DROP DATABASE <dbname> (allcaps) > recreate db that you want and start over
class Hero(models.Model):
	hero_id = models.IntegerField(default=0)
	name = models.CharField(max_length=50, default="")
	localized_name = models.CharField(max_length=50, default="")
	primary_attr = models.CharField(max_length=3, default="")
	attack_type = models.CharField(max_length=6, default="")
	roles = JSONField()
	webm = models.CharField(max_length=100, default="")
	img = models.CharField(max_length=100, default="")
	icon = models.CharField(max_length=100, default="")
	url = models.CharField(max_length=100, default="")
	base_health = models.IntegerField(default=0)
	base_health_regen = models.FloatField(default=0.0)
	base_mana = models.IntegerField(default=0)
	base_mana_regen = models.FloatField(default=0.0)
	base_armor = models.IntegerField(default=0)
	base_mr = models.IntegerField(default=0)
	base_attack_min = models.IntegerField(default=0)
	base_attack_max = models.IntegerField(default=0)
	base_str = models.IntegerField(default=0)
	base_agi = models.IntegerField(default=0)
	base_int = models.IntegerField(default=0)
	str_gain = models.FloatField(default=0.0)
	agi_gain = models.FloatField(default=0.0)
	int_gain = models.FloatField(default=0.0)
	attack_range = models.IntegerField(default=0)
	projectile_speed = models.IntegerField(default=0)
	attack_rate = models.FloatField(default=0.0)
	move_speed = models.IntegerField(default=0)
	turn_rate = models.FloatField(default=0.0)
	cm_enabled = models.BooleanField(default=True)
	legs = models.IntegerField(default=0)
	complexity = models.IntegerField(default=0)

	def __unicode__(self):
		return self.localized_name

class Ability(models.Model):
	created_order = models.IntegerField(default=0)
	hero = models.ForeignKey(Hero, related_name='abilities', on_delete=models.CASCADE)
	ability_name = models.CharField(max_length=50, default="")
	heroid = models.IntegerField(default=0)
	ability_info = JSONField()
	
	class Meta:
		ordering = ('created_order',) # Allows abilities to be displayed in order in DRF

	def __unicode__(self):
		return self.ability_name










# {
#   "1": {
#     "id": 1,
#     "name": "npc_dota_hero_antimage",
#     "localized_name": "Anti-Mage",
#     "primary_attr": "agi",
#     "attack_type": "Melee",
#     "roles": [
#       "Carry",
#       "Escape",
#       "Nuker"
#     ],
#     "img": "/apps/dota2/images/heroes/antimage_full.png?",
#     "icon": "/apps/dota2/images/heroes/antimage_icon.png",
#     "url": "Anti-Mage",
#     "base_health": 200,
#     "base_health_regen": 0,
#     "base_mana": 75,
#     "base_mana_regen": 0.01,
#     "base_armor": -1,
#     "base_mr": 25,
#     "base_attack_min": 27,
#     "base_attack_max": 31,
#     "base_str": 22,
#     "base_agi": 22,
#     "base_int": 15,
#     "str_gain": 1.5,
#     "agi_gain": 2.8,
#     "int_gain": 1.8,
#     "attack_range": 150,
#     "projectile_speed": 0,
#     "attack_rate": 1.45,
#     "move_speed": 315,
#     "turn_rate": 0.5,
#     "cm_enabled": true,
#     "legs": 2
#   },