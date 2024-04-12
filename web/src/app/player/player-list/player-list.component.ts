import {Component, OnInit} from '@angular/core';
import {PlayerService} from "../../shared/services/player.service";

export interface Player {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  height: string;
  average_score: string;
  games_played: string;
}

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  displayedColumns : string[] = ['id',  'first_name', 'last_name', 'email','height', 'average_score', 'games_played','action'];
  dataSource = [];

  constructor(private playerService: PlayerService) {
  }

  ngOnInit(): void {
    this.loadAllPlayers();
  }

  loadAllPlayers() {
    this.playerService.getPlayers().subscribe(res => {
      this.dataSource = res.map((p:any)=>{
        return {
          'id': p.id,
          'email': p.user.email,
          'first_name': p.user.first_name,
          'last_name': p.user.last_name,
          'height': p.height,
          'average_score': p.average_score,
          'games_played': p.games_played
        }
      })
    })
  }

}
