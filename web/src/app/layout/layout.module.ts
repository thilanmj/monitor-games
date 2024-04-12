import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LayoutRoutingModule} from "./layout-routing.module";

@NgModule({
  declarations: [
    MainLayoutComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class LayoutModule {
}
