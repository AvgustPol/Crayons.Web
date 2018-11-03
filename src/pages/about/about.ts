import { autoinject } from 'aurelia-framework';
import { MembersService } from 'resources/services/members-service';

const tutor = {
  "photoUrl": "tbabczynski.png",
  "fullName": "dr inż. Tomasz Babczyński"
}

@autoinject()
export class About {
  tutor = tutor;
  members;
  pictureBaseUrl = '/images/members/';

  constructor(private membersService: MembersService) { }

  activate() {
    this.getMembers();
  }

  private async getMembers() {
    this.members = await this.membersService.getAll();
  }
}