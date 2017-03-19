import {autoinject} from 'aurelia-framework';
import {HttpService} from './http-service';

@autoinject()
export class MembersService {
  isFetching: boolean;
  error: string;
  
  constructor(private http: HttpService) {}

  async getAll(): Promise<any> {
    try {
      this.isFetching = true;
      let response = await this.http.get('members');
      let members = await response.json();

      this.isFetching = false;
      return members;
    } catch(error) {
      this.isFetching = false;
      this.error = 'Failed to load resources';
    }
  }
}
