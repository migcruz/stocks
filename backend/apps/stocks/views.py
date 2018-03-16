from rest_framework import viewsets
from .serializers import CompanySerializer
from .models import Company
# Create your views here.

class CompanyViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Companies to be viewed or edited.
    """
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_field = 'ticker'


# class AbilityViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows Abilities to be viewed or edited.
#     """
#     #queryset = Ability.objects.all()
#     serializer_class = AbilitySerializer
#     lookup_field = 'ability_name'

#     def get_queryset(self):
#         """
#         This view should return a list of all the abilities of a hero.
#         """
#         heroid = self.kwargs['heroid']
#         return Ability.objects.all().filter(heroid=heroid)