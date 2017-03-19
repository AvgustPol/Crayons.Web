import {autoinject} from 'aurelia-framework';
import {GithubService} from '../../services/github-service';
import {Router} from 'aurelia-router';

@autoinject()
export class GithubSignin {


  constructor(private githubService: GithubService, private router: Router) {}

  async activate(params: any) {
    let user = {
      "GitHubCode": params.code,
      "FirstName": "Dawid",
      "LastName": "Kobierski",
      "Email": "dawid.kobierski@gmail.com",
      "PhoneNumber": "666980344"
    }
    let result = await this.githubService.authenticate(user);

    localStorage.setItem('jwt', result["access_token"]);

    this.router.navigateToRoute('course');
  }
}