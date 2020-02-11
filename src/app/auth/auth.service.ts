import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private apiUrl = environment.apiURL;
    constructor(protected httpClient: HttpClient,
        private router: Router) {

    }

    protected getCommonOptions() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return httpOptions;
    }

    login(data): Observable<any> {
        return this.httpClient.post(`${this.apiUrl}/login/`,data, this.getCommonOptions());
    }

    logOut() {
        localStorage.clear();
        this.router.navigate(['login']);
    }
}
