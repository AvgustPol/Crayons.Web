import {autoinject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

@autoinject()
export class MailService {
  isFetching: boolean;

  constructor(private http: HttpClient) {
    http.configure(config => {
      config.useStandardConfiguration()
        .withBaseUrl('http://localhost:5000/api/');
      });
  }

  async sendMail(mail) {
    try {
      await this.http.fetch('mails', {
        method: 'POST',
        body: json(mail)
      });
      return true;
    } catch (error) {
      return false;
    }
  }
}