from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Team, Player, UserActivity, Game


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', ]


class PlayerSerializer(serializers.ModelSerializer):
    user = UserSerializer(partial=True, required=False)

    class Meta:
        model = Player
        fields = ('user', 'id', 'height', 'average_score', 'games_played')


class TeamSerializer(serializers.ModelSerializer):
    players = PlayerSerializer(many=True, read_only=True)
    coach = UserSerializer(partial=True, required=False)

    class Meta:
        model = Team
        fields = ('players', 'id', 'name', 'coach')


class UserActivitySerializer(serializers.ModelSerializer):
    user = UserSerializer(partial=True, required=False)

    class Meta:
        model = UserActivity
        fields = ('user', 'id', 'login_count', 'total_time_spent', 'is_online')


class GameSerializer(serializers.ModelSerializer):
    team = TeamSerializer(many=True, read_only=True)

    class Meta:
        model = Game
        fields = ('team', 'id', 'is_won', 'final_score')