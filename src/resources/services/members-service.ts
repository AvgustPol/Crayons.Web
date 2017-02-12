import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';

@autoinject()
export class MembersService {
  isFetching: boolean;
  
  constructor(private http: HttpClient) {
    http.configure(config => {
      config.useStandardConfiguration()
        .withBaseUrl('http://localhost:5000/api/');
    })
  }

  async getAllAsync() {
    try {
      this.isFetching = true;
      let response = await this.http.fetch('members');
      let members = await response.json();

      this.isFetching = false;
      return members;
    } catch(error) {
      this.isFetching = false;
      return null;
    }
  }
}