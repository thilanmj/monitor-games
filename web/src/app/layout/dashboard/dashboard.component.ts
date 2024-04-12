import {Component, OnInit} from '@angular/core';
import {GameService} from "../../shared/services/game.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  games: any;

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.loadGame();
  }

  loadGame() {
    this.gameService.getGames().subscribe(res => {
      this.games = res;
    })
  }

}
