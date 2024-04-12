import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: 'players',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./player/player.module').then(m => m.PlayerModule),
      }]
  },
  {
    path: 'teams',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./team/team.module').then(m => m.TeamModule),
      }]
  },
  {
    path: 'dashboard',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
      }]
  },
  {path : '' , redirectTo : '/dashboard' , pathMatch : 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
