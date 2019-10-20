import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  
  constructor(private auth: AuthenticationService,
            private router : Router) { }

  canActivate(): boolean {
    if (!this.auth.getToken()) {
      this.router.navigate(['login']);
      return false;
    }  

    return true;
  }

}
