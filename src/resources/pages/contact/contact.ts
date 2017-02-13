import {autoinject} from 'aurelia-framework';
import {MailService} from '../../services/mail-service';
import {RecaptchaService} from '../../services/recaptcha-service';

@autoinject()
export class Contact {
  firstName = '';
  lastName = '';
  email = '';
  title = '';
  content = '';
  verified = false;

  constructor(private mailService: MailService, private recaptchaService: RecaptchaService) {}

  async sendMail() {
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

    let response = await this.mailService.sendMail(mail);

    if (response) {
      this.clearForm();
    } else {

    }
  }

  async recaptchaVerified(response) {
    this.verified = await this.recaptchaService.verify(response);
  }

  private clearForm() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.title = '';
    this.content = '';
  }
}
