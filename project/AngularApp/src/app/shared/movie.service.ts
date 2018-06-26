import { Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
// import {get} from 'http';

@Injectable()
export class MovieService {
  value;

  constructor(private http: Http) {}

  getCeleb(query: string) {
    const userInput = (<HTMLInputElement>document.getElementById(query)).value;
    const body = new URLSearchParams();
    this.value = userInput;
    body.set('url', this.value);
    return this.http.post('/Celebrity/', body)
      .map(res => res.json());
  }

  getMovie(query: string) {
    const body = new URLSearchParams();
    body.set('name', query);
    return this.http.post('/Movie/', body)
      .map(res => res.json());
  }

}
