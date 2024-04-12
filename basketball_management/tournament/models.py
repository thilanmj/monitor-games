from django.contrib.auth.models import User
from django.db import models


class Team(models.Model):
    name = models.CharField(max_length=100)
    coach = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Player(models.Model):
    team = models.ForeignKey(Team, related_name='players', on_delete=models.CASCADE)
    height = models.FloatField()
    average_score = models.FloatField(default=0)
    games_played = models.PositiveIntegerField(default=0)
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.first_name


class UserActivity(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    login_count = models.PositiveIntegerField(default=0)
    total_time_spent = models.PositiveIntegerField(default=0)
    is_online = models.BooleanField(default=False)

    def __str__(self):
        return self.user.first_name


class Game(models.Model):
    team = models.OneToOneField(Team, on_delete=models.CASCADE)
    is_won = models.BooleanField(default=False)
    final_score = models.PositiveIntegerField(default=0)
