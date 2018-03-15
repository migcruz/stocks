from rest_framework import serializers
from .models import Hero, Ability

from rest_framework.relations import HyperlinkedIdentityField
from rest_framework.reverse import reverse

class ParameterisedHyperlinkedIdentityField(HyperlinkedIdentityField):
    """
    Represents the instance, or a property on the instance, using hyperlinking.

    lookup_fields is a tuple of tuples of the form:
        ('model_field', 'url_parameter')
    """
    lookup_fields = (('pk', 'pk'),)

    def __init__(self, *args, **kwargs):
        self.lookup_fields = kwargs.pop('lookup_fields', self.lookup_fields)
        super(ParameterisedHyperlinkedIdentityField, self).__init__(*args, **kwargs)

    def get_url(self, obj, view_name, request, format):
        """
        Given an object, return the URL that hyperlinks to the object.

        May raise a `NoReverseMatch` if the `view_name` and `lookup_field`
        attributes are not configured to correctly match the URL conf.
        """
        kwargs = {}
        for model_field, url_param in self.lookup_fields:
            attr = obj
            for field in model_field.split('.'):
                attr = getattr(attr,field)
            kwargs[url_param] = attr

        return reverse(view_name, kwargs=kwargs, request=request, format=format)


class AbilitySerializer(serializers.HyperlinkedModelSerializer):
    url = ParameterisedHyperlinkedIdentityField(view_name='ability-detail', lookup_fields=(('heroid', 'heroid'), ('ability_name', 'ability_name')), read_only=True)
    
    class Meta:
        model = Ability
        fields = ('ability_name', 'heroid', 'ability_info', 'url' )
        # lookup_field = 'hero_id'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'hero_id'}
        # }


class HeroSerializer(serializers.HyperlinkedModelSerializer):
    abilities = AbilitySerializer(many=True, read_only=True)

    url = serializers.HyperlinkedIdentityField(
        view_name='hero-detail',
        lookup_field='hero_id'
    )
    class Meta:
        model = Hero
        fields = ('id', 'hero_id', 'name', 'localized_name', 'primary_attr', 'attack_type', 'roles', 'img', 'webm',
                  'icon', 'url', 'base_health', 'base_health_regen', 'base_mana', 'base_mana_regen', 'base_armor', 'base_mr', 'base_attack_min',
                  'base_attack_max', 'base_str', 'base_agi', 'base_int', 'str_gain', 'agi_gain', 'int_gain', 'attack_range',
                  'projectile_speed', 'attack_rate', 'move_speed', 'turn_rate', 'cm_enabled', 'legs', 'complexity', 'abilities' )
        # lookup_field = 'hero_id'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'hero_id'}
        # }
