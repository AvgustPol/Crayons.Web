import {autoinject} from 'aurelia-framework';
import FeedService from '../../services/feed-service';

@autoinject()
export class Feed {
  posts;

  constructor(private feedService: FeedService) {}

  activate() {
    this.getPost();
  }

  private async getPost() {
    this.posts = await this.feedService.getAll();
  }
}
