import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';

@autoinject()
export class MembersService {
  isFetching: boolean;
  
  constructor(private http: HttpClient) {
    http.configure(config => {
      config.useStandardConfiguration()
        .withBaseUrl('http://localhost:10326/api/members');
    })
  }

  async getAllAsync() {
    this.isFetching = true;
    var response = await this.http.fetch('');
    var members = await response.json();

    this.isFetching = false;
    return members;
  }
}