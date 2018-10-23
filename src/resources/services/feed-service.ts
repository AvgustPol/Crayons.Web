import {autoinject} from 'aurelia-framework';
import {HttpService} from './http-service';

@autoinject()
export class FeedService {
  isFetching: boolean;
  error: string;

  constructor(private http: HttpService) {}

  async getAll(): Promise<any> {
    try {
      this.isFetching = true;
      let response = await this.http.get('feed');
      let posts = await response.json();

      this.isFetching = false;
      return posts;
    } catch(error) {
      this.isFetching = false;
      this.error = 'Failed to load resources';
    }
  }

  async getLatest(count: number): Promise<any> {
    try {
      this.isFetching = true;
      let response = await this.http.get(`feed?count=${count}`);
      let posts = await response.json();

      this.isFetching = false;
      return posts;
    } catch (error) {
      this.isFetching = false;
      this.error = 'Failed to load resources';
    }
  }
}
