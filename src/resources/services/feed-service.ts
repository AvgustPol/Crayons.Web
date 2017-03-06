import {autoinject} from 'aurelia-framework';
import HttpService from './http-service';

@autoinject()
class FeedService {
  isFetching: boolean;

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
      // handle error
    }
  }
}

export default FeedService;
