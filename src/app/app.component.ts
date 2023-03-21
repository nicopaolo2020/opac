import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit{

  title = 'SCC - Opac';
  showHeader = false;
  showFooter = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeader = this.activatedRoute.root.firstChild?.snapshot.data['showHeader'] !== false;
        this.showFooter = this.activatedRoute.root.firstChild?.snapshot.data['showFooter'] !== false;
      }
    });
  }

}
