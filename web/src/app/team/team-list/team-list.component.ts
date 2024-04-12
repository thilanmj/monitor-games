import { Component } from '@angular/core';
import {PlayerService} from "../../shared/services/player.service";
import {TeamService} from "../../shared/services/team.service";

export interface Team {
  id: number;
  name: string;
  players: number;
  coach: string;
}

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent {

  displayedColumns : string[] = ['id',  'name', 'coach', 'players'];
  dataSource = [];

  constructor(private teamService: TeamService) {
  }

  ngOnInit(): void {
    this.loadAllTeams();
  }

  loadAllTeams() {
    this.teamService.getTeams().subscribe(res => {
      this.dataSource = res.map((t:any)=>{
        return {
          'id': t.id,
          'name': t.name,
          'coach': t.coach.first_name +' '+ t.coach.last_name,
          'players': t.players.length,
        }
      })
    })
  }

}
