import {autoinject} from 'aurelia-framework';
import HttpService from './http-service';

@autoinject()
class MembersService {
  isFetching: boolean;
  
  constructor(private http: HttpService) {}

  async getAllAsync(): Promise<any> {
    try {
      this.isFetching = true;
      let response = await this.http.get('members');
      let members = await response.json();

      this.isFetching = false;
      return members;
    } catch(error) {
      this.isFetching = false;
      // handle error
    }
  }
}

export default MembersService;
