import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { SubjectSubscriber, Subject } from 'rxjs/internal/Subject';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    
    token : Observable<any>;
    tokenSubject : BehaviorSubject<any>;
    
    constructor(private http: HttpClient) {
        this.tokenSubject = new BehaviorSubject<any>(null);
        this.token = this.tokenSubject.asObservable();
        this.estaLogado();
    }
    estaLogado() {
        let token = JSON.parse(localStorage.getItem("tokenUser"));
        if(token)
            this.tokenSubject.next(token);

    }

    getToken() : String{
        console.log(this.tokenSubject.value.token);
        return this.tokenSubject.value.token;
    }
    registrar(email: string, password: string): Observable<any> {
        return this.http.post<any>(`${environment.defautltUrl}/api/auth/register`, { "email": email, "password": password });
    }

    login(email: string, password: string): Observable<any> {
        return this.http.post<any>(`${environment.defautltUrl}/api/auth/login`,
            { "email": email, "password": password }).pipe(
                map((res: any) => {
                    console.log("usuario logado: ", res);
                    localStorage.setItem("tokenUser", JSON.stringify(res));
                    this.tokenSubject.next(res);
                    return res;
                })
            );
    }

    logout(){
        localStorage.setItem("tokenUser","");
        this.tokenSubject.next(null);
    }







}
