import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlayerListComponent} from "./player-list/player-list.component";
import {PlayerComponent} from "./player/player.component";

const routes: Routes = [
  {
    path:'',
    component: PlayerListComponent
  },{
    path:':id',
    component: PlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
