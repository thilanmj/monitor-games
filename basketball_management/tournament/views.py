from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from tournament.models import Player, UserActivity, Team, Game
from tournament.serializers import PlayerSerializer, UserActivitySerializer, TeamSerializer, GameSerializer


@api_view(['GET'])
def getPlayers(request, players=[]):
    score_param = request.GET.get("score")
    if score_param is not None:
        player_list = Player.objects.all()
        for player in player_list:
            if player.average_score >= int(score_param):
                players.append(player)
    else:
        players = Player.objects.all()

    serializer = PlayerSerializer(players, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def getPlayer(request, player_id: int):
    player_instance = Player.objects.get(pk=player_id)
    if not player_instance:
        return Response(
            {"res": "Object with player id does not exists"},
            status=status.HTTP_400_BAD_REQUEST
        )

    serializer = PlayerSerializer(player_instance)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def getUserActivity(request, user_id: int):
    user_instance = UserActivity.objects.get(user_id=user_id)
    if not user_instance:
        return Response(
            {"res": "Object with user id does not exists"},
            status=status.HTTP_400_BAD_REQUEST
        )

    serializer = UserActivitySerializer(user_instance)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def getUsersActivities(request):
    users_instance = UserActivity.objects.all()
    serializer = UserActivitySerializer(users_instance, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def getTeam(request, team_id: int):
    team_instance = Team.objects.get(pk=team_id)
    if not team_instance:
        return Response(
            {"res": "Object with team id does not exists"},
            status=status.HTTP_400_BAD_REQUEST
        )

    serializer = TeamSerializer(team_instance)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def getTeams(request):
    teams_instance = Team.objects.all()
    serializer = TeamSerializer(teams_instance, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def getGames(request):
    games_instance = Game.objects.all()
    serializer = GameSerializer(games_instance, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)