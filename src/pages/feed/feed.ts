import { autoinject } from 'aurelia-framework';
import { FeedService } from 'resources/services/feed-service';

@autoinject()
export class Feed {
  posts;

  constructor(private feedService: FeedService) { }

  activate() {
    this.getPosts();
  }

  private async getPosts() {
    this.posts = await this.feedService.getAll();
  }
}
