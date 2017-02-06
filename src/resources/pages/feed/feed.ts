import {autoinject} from 'aurelia-framework';
import {FeedService} from '../../services/feed-service';

@autoinject()
export class Feed {
  posts;

  constructor(private feedService: FeedService) {}

  async activate() {
    this.posts = await this.feedService.getAllAsync();
  }
}
