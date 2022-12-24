from django.db import models
# Create your models here.

class UserProfile(models.Model):
    profile_id = models.AutoField(primary_key=True)
    user_id = models.IntegerField()
    name = models.CharField(max_length=20)
    symbol =  models.CharField(max_length=8)
    amount =  models.DecimalField(max_digits=18, decimal_places=6)
    
    def __str__(self):
        return self.name