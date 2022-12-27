from rest_framework import serializers
from .models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('profile_id', 'user_id','name' ,'symbol','to','amount')