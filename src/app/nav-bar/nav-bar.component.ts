import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public isCollapsed: boolean;
  public current: any;
  constructor(private router: Router) {
    this.isCollapsed = true;
    this.router.events.subscribe((val: NavigationEnd) => {
      this.current = val.url;
    });
  }

  ngOnInit() {}

  isCurrentPath(path) {
    return path === this.current;
  }

}
