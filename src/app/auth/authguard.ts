import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  public authToken;
  private isAuthenticated = localStorage.getItem('auth_token');

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isAuthenticated) {
      // this.router.navigate(['/tracks/all']);
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}