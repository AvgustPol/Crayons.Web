import {autoinject} from 'aurelia-framework';
import {HttpService} from './http-service';

@autoinject()
export class GithubService {
  isFetching: boolean;
  error: string;

  constructor(private http: HttpService) {}

  async getRedirectUrl(): Promise<object> {
    try {
      this.isFetching = true;
      let response = await this.http.get('github/redirect');
      let url = await response.json();

      this.isFetching = false;
      return url;
    } catch(error) {
      this.isFetching = false;
      this.error = 'Failed to load resources';
    }
  }

  async authenticate(user): Promise<any> {
    try {
      this.isFetching = true;
      let response = await this.http.post('github/signin', user);
      let result = await response.json();
      
      this.isFetching = false;
      return result;
    } catch (error) {
      this.isFetching = false;
      this.error = 'Failed to authenticate!';
    }
  }
}