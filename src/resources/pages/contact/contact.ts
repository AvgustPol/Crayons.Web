import {autoinject} from 'aurelia-framework';
import {MailService} from '../../services/mail-service';

@autoinject()
export class Contact {
  firstName = '';
  lastName = '';
  email = '';
  title = '';
  content = '';

  constructor(private mailService: MailService) {}

  sendMail() {
    let mail = {
      "from": {
        "email": this.email,
        "firstName": this.firstName,
        "lastName": this.lastName
      },
      "subject": this.title,
      "to": {
        "email": "dawid.kobierski@gmail.com",
        "firstName": "Dawid",
        "lastName": "Kobierski"
      },
      "content": this.content
    };

    let response = this.mailService.sendMail(mail);

    if (response) {
      this.clearForm();
    } else {

    }
  }

  private clearForm() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.title = '';
    this.content = '';
  }
}
