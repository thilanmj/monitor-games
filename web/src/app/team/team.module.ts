import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team/team.component';
import { TeamListComponent } from './team-list/team-list.component';
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    TeamComponent,
    TeamListComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    MatTableModule
  ]
})
export class TeamModule { }
