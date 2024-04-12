import {Component, OnInit} from '@angular/core';
import {CommonService} from "../services/common.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  title: string = '';
  subTitle: string = '';
  backButtonTitle: string = ''
  url: string =''

  constructor(private commonService: CommonService,private router: Router) {
  }

  ngOnInit(): void {
    this.commonService.getTitle().subscribe(res => {
      this.title = res
    })
    this.commonService.getSubTitle().subscribe(res => {
      this.subTitle = res
    })

    this.backButtonTitle = this.router.url.substring(this.router.url.indexOf("/")+1, this.router.url.lastIndexOf("/"))
    this.url = this.router.url.substring(this.router.url.indexOf("/"), this.router.url.lastIndexOf("/"))
  }

}
