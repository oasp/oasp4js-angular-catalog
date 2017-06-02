import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-oasp4-j',
  templateUrl: './oasp4-j.component.html',
  styleUrls: ['./oasp4-j.component.css']
})
export class OASP4JComponent implements OnInit {
  public current: any;
  constructor(private router: Router) {
    this.router.events.subscribe((val: NavigationEnd) => {
      this.current = val.url;
    });
  }
  ngOnInit() {
  }
  onclick(menuItem) {

  }
  isCurrentPath(path) {
    if (this.current === undefined) {
      return false;
    }
    const x = this.current.split('#')[0] || this.current;
    return x === path;
  }
}
