import { autoinject } from 'aurelia-framework';
import { FeedService } from 'resources/services/feed-service';

@autoinject()
export class Home {
  facebookUrl = 'https://www.facebook.com/KNKredek';
  posts;

  constructor(private feedService: FeedService) { }

  activate() {
    this.getPosts();
  }

  private async getPosts() {
    let postsCount = 2;
    this.posts = await this.feedService.getLatest(postsCount);
  }
}
