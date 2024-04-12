import {Component, OnInit} from '@angular/core';
import {PlayerService} from "../../shared/services/player.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  playerDetails: any;

  constructor(
    private playerService: PlayerService,
    private activatedRoute: ActivatedRoute
    ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params) {
        this.loadPlayerDetails(params['id'])
      }
    })
  }

  loadPlayerDetails(id:number){
    this.playerService.getPlayer(id).subscribe(res=>{
      this.playerDetails = res;
    })
  }

}
