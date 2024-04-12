from django.urls import path

import tournament.views

urlpatterns = [
    path('players', tournament.views.getPlayers, name='player'),
    path('players/<int:player_id>/', tournament.views.getPlayer, name='player-detail'),
    path('users/activities', tournament.views.getUsersActivities, name='user-activity-list'),
    path('users/activities/<int:user_id>/', tournament.views.getUserActivity, name='user-activity'),
    path('teams', tournament.views.getTeams, name='team-list'),
    path('teams/<int:team_id>/', tournament.views.getTeam, name='team details'),
    path('games', tournament.views.getGames, name='game list')
]
