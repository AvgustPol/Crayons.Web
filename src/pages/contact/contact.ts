import { autoinject } from 'aurelia-framework';
import {
  ValidationRules, ValidationControllerFactory,
  ValidationController, validateTrigger
} from 'aurelia-validation';
import { BootstrapFormRenderer } from 'resources/utils/boostrap-form-renderer';
import { MailService } from 'resources/services/mail-service';
import { RecaptchaService } from 'resources/services/recaptcha-service';

import { User } from 'resources/models/user';
import { Mail } from 'resources/models/mail';

@autoinject()
export class Contact {
  private verified = false;
  private controller: ValidationController;
  mail = new Mail();

  constructor(private mailService: MailService,
    private recaptchaService: RecaptchaService,
    private validationFactory: ValidationControllerFactory) {
    this.controller = this.validationFactory.createForCurrentScope();
    this.controller.validateTrigger = validateTrigger.blur;
    this.controller.addRenderer(new BootstrapFormRenderer());

    this.mail.from = new User();

    ValidationRules
      .ensure((m: Mail) => m.subject)
      .minLength(5)
      .required()
      .ensure((m: Mail) => m.content)
      .minLength(30)
      .required()
      .on(Mail);

    ValidationRules
      .ensure((m: User) => m.firstName)
      .required()
      .ensure((m: User) => m.email)
      .email()
      .required()
      .on(User);
  }

  get canSubmit() {
    return !this.verified;
  }

  async sendMail() {
    let validation = await this.controller.validate();
    if (!validation.valid || !this.verified) {
      return;
    }

    // move to backend
    const mailTo: User = {
      firstName: "Dawid",
      lastName: "Kobierski",
      email: "dawid.kobierski@gmail.com",
    };
    this.mail.to = mailTo;

    let response = await this.mailService.sendMail(this.mail);

    if (response) {
      this.clearForm();
      //alert success
    } else {
      //alert failure
    }
  }

  async recaptchaVerified(response) {
    this.verified = await this.recaptchaService.verify(response);
  }

  private clearForm() {
    this.mail = new Mail();
    this.mail.from = new User();
  }
}
