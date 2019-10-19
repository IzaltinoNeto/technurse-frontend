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

    constructor(private authenticationService: AuthenticationService,
        private router: Router) {
        this.authenticationService.token.subscribe(token => {
            console.log(token);
            if (token)
                router.navigate(['/']);
            else
                router.navigate(['login']);
        })
    }

}
