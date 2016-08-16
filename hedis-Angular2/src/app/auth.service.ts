import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Constants } from './Constants';

@Injectable()
export class AuthService {
  isAuthenticated: boolean = false;
  constructor(private http: Http) {}
  
  authenticatenow(usercreds) {
        var headers = new Headers();
        var creds = 'Username=' + usercreds.username + '&Password=' + usercreds.password;
        //var url = Constants.VALIDATE_USER;
        var url = 'http://173.162.40.250/HEDIS/HEDISAPI' + '/ValidateUser';

        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return new Promise((resolve) => {
        this.http.post(url, creds, {headers: headers}).subscribe((data) => {
            if(data.json().success) {
                window.localStorage.setItem('auth_key', data.json().token);
                this.isAuthenticated = true;}
                resolve(this.isAuthenticated);
            }
        )
        
        })
    }
}

