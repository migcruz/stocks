from rest_framework import viewsets
from .serializers import HeroSerializer, AbilitySerializer
from .models import Hero, Ability
# Create your views here.

class HeroViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Heroes to be viewed or edited.
    """
    queryset = Hero.objects.all()
    serializer_class = HeroSerializer
    lookup_field = 'hero_id'

class AbilityViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Abilities to be viewed or edited.
    """
    #queryset = Ability.objects.all()
    serializer_class = AbilitySerializer
    lookup_field = 'ability_name'

    def get_queryset(self):
        """
        This view should return a list of all the abilities of a hero.
        """
        heroid = self.kwargs['heroid']
        return Ability.objects.all().filter(heroid=heroid)
