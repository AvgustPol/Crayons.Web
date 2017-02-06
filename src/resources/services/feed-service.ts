import {HttpClient} from 'aurelia-fetch-client'
import {autoinject} from 'aurelia-framework'

@autoinject()
export class FeedService {
  isFetching: boolean;

  constructor(private http: HttpClient) {
    http.configure(config => {
      config.useStandardConfiguration()
        .withBaseUrl('http://localhost:10326/api/feed');
    })
  }

  async getAllAsync() {
    this.isFetching = true;
    let response = await this.http.fetch('');
    let posts = await response.json();

    this.isFetching = false;
    return posts;
  }
}