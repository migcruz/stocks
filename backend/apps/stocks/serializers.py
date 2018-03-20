from rest_framework import serializers
from .models import Company

from rest_framework.relations import HyperlinkedIdentityField
from rest_framework.reverse import reverse

from collections import OrderedDict

# class ParameterisedHyperlinkedIdentityField(HyperlinkedIdentityField):
#     """
#     Represents the instance, or a property on the instance, using hyperlinking.

#     lookup_fields is a tuple of tuples of the form:
#         ('model_field', 'url_parameter')
#     """
#     lookup_fields = (('pk', 'pk'),)

#     def __init__(self, *args, **kwargs):
#         self.lookup_fields = kwargs.pop('lookup_fields', self.lookup_fields)
#         super(ParameterisedHyperlinkedIdentityField, self).__init__(*args, **kwargs)

#     def get_url(self, obj, view_name, request, format):
#         """
#         Given an object, return the URL that hyperlinks to the object.

#         May raise a `NoReverseMatch` if the `view_name` and `lookup_field`
#         attributes are not configured to correctly match the URL conf.
#         """
#         kwargs = {}
#         for model_field, url_param in self.lookup_fields:
#             attr = obj
#             for field in model_field.split('.'):
#                 attr = getattr(attr,field)
#             kwargs[url_param] = attr

#         return reverse(view_name, kwargs=kwargs, request=request, format=format)


# class AbilitySerializer(serializers.HyperlinkedModelSerializer):
#     url = ParameterisedHyperlinkedIdentityField(view_name='ability-detail', lookup_fields=(('heroid', 'heroid'), ('ability_name', 'ability_name')), read_only=True)
    
#     class Meta:
#         model = Ability
#         fields = ('ability_name', 'heroid', 'ability_info', 'url' )
#         # lookup_field = 'hero_id'
#         # extra_kwargs = {
#         #     'url': {'lookup_field': 'hero_id'}
        # }


class CompanySerializer(serializers.HyperlinkedModelSerializer):
    #abilities = AbilitySerializer(many=True, read_only=True)

    url = serializers.HyperlinkedIdentityField(
        view_name='company-detail',
        lookup_field='ticker'
    )

    time_series_daily = serializers.SerializerMethodField()
    
    class Meta:
        model = Company
        fields = ('id', 'ticker', 'name', 'marketcap', 'open_price', 'close_price', 'financials', 'url', 'time_series_daily')
    
    def get_time_series_daily(self, obj):
        return OrderedDict(sorted(obj.time_series_daily.items(), reverse=True))

    
class CompanyCompactSerializer(serializers.HyperlinkedModelSerializer):
    #abilities = AbilitySerializer(many=True, read_only=True)

    url = serializers.HyperlinkedIdentityField(
        view_name='company-detail',
        lookup_field='ticker'
    )

    time_series_daily = serializers.SerializerMethodField()

    class Meta:
        model = Company
        fields = ('id', 'ticker', 'name', 'marketcap', 'open_price', 'close_price', 'financials', 'url', 'time_series_daily')
    
    def get_time_series_daily(self, obj):

        keys = sorted((obj.time_series_daily).keys(), reverse=True)
        del keys[100:]
        compact_time_series = OrderedDict()
        for key in keys:
            compact_time_series[key] = obj.time_series_daily[key]


        return compact_time_series