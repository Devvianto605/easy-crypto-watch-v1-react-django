from django.contrib import admin
from .models import User

class UserAdmin(admin.ModelAdmin):
    model = User
    list_display = ('id', 'username', 'email')

# Register your models here.

admin.site.register(User, UserAdmin)