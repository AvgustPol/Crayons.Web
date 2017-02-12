import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';

@autoinject()
export class FeedService {
  isFetching: boolean;

  constructor(private http: HttpClient) {
    http.configure(config => {
      config.useStandardConfiguration()
        .withBaseUrl('http://localhost:5000/api/');
    });
  }

  async getAllAsync() {
    try {
      this.isFetching = true;
      let response = await this.http.fetch('feed');
      let posts = await response.json();

      this.isFetching = false;
      return posts;
    } catch(error) {
      this.isFetching = false;
      return null;
    }
  }
}