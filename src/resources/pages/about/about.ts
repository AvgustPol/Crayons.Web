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

  activate() {
    this.membersService.getAll()
      .then(data => this.members = data);
  }
}