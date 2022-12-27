from django.contrib import admin
from .models import UserProfile

class UserProfileAdmin(admin.ModelAdmin):
    model = UserProfile
    list_display =  ('profile_id', 'user_id', 'name' ,'symbol','to','amount')

admin.site.register(UserProfile, UserProfileAdmin)