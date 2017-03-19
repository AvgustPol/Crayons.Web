import {autoinject} from 'aurelia-framework';
import {GithubService} from '../../services/github-service';

@autoinject()
export class Course {
  gitHubUrl: object;

  constructor(private githubSrvice: GithubService) {}

  activate() {
    this.setRedirectUrl();
  }

  async setRedirectUrl() {
    let url = await this.githubSrvice.getRedirectUrl();
    this.gitHubUrl = url["url"];
  }
}
