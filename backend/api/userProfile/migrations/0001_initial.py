# Generated by Django 4.1.4 on 2022-12-21 12:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('profile_id', models.IntegerField(primary_key=True, serialize=False)),
                ('dashboardElement', models.JSONField()),
            ],
        ),
    ]
