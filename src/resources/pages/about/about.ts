import {autoinject} from 'aurelia-framework';
import {MembersService} from '../../services/members-service';

const tutor = {
  "photoUrl": "tbabczynski.png",
  "fullName": "dr inż. Tomasz Babczyński"
}

@autoinject()
export class About {
  tutor = tutor;
  members;
  baseUrl = './assets/images/members/';

  constructor(private membersService: MembersService) {

  }

  async activate() {
    this.members = await this.membersService.getAllAsync();
  }
}