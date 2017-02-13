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

  async sendMail(mail): Promise<boolean> {
    try {
      let response = await this.http.fetch('mails', {
        method: 'POST',
        body: json(mail)
      });
      let result = response.json()
      return result;
    } catch (error) {
      return false;
    }
  }
}