import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerComponent } from './player/player.component';
import {MatTableModule} from "@angular/material/table";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatIcon, MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    PlayerListComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PlayerModule { }
