import {Component } from '@angular/core';
import { navItems } from '../../_nav';
import { AuthenticationService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ){

  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('\login');
    // this.authService.logOut();
  }
}
