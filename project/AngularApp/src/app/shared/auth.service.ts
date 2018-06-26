import { Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: Http) {}

  getAuthStatus() {
    return this.http.get('/check').map(res => res.json());
  }
}
