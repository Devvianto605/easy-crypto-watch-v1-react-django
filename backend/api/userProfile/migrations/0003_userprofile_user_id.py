# Generated by Django 4.1.4 on 2022-12-21 13:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userProfile', '0002_remove_userprofile_dashboardelement'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='user_id',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]