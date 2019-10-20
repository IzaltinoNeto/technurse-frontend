import { AuthenticationService } from './service/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'technurse-frontend';
    logado = false;
    constructor(private authenticationService: AuthenticationService,
        private router: Router) {
        this.authenticationService.token.subscribe(token => {
            if (token) {
                this.logado = true;
                router.navigate(['/']);
            }
            else {
                this.logado = false;
                router.navigate(['login']);
            }
        })
    }

    logout(){
        this.authenticationService.logout();
    }

}
