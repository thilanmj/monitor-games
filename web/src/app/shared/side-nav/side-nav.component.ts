import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {path: '/dashboard', title: 'Dashboard', icon: 'bar_chart_4_bars', class: ''},
  {path: '/teams', title: 'Teams', icon: 'diversity_3', class: ''},
  {path: '/players', title: 'Players', icon: 'sports_handball', class: ''}
];

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  menuItems: RouteInfo[] = [];

  ngOnInit() {
    this.menuItems = ROUTES.map(menuItem => menuItem);
  }

  trackByFn(index: number, item: any): number {
    return item.id;
  }

}
