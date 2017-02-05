import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';

@autoinject()
export class MembersService {
  constructor(private http: HttpClient) {

  }

  getAll() {
    return new Promise(resolve => this.http.fetch('http://localhost:10326/api/members')
      .then(response => response.json())
      .then(data => resolve(data)));
  }
}