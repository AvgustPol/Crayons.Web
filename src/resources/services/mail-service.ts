import {autoinject} from 'aurelia-framework';
import HttpService from './http-service';

@autoinject()
class MailService {
  isFetching: boolean;

  constructor(private http: HttpService) {}

  async sendMail(mail): Promise<any> {
    try {
      this.isFetching = true;
      let response = await this.http.post('mails', mail);
      let result = await response.json();

      this.isFetching = false;
      return result;
    } catch (error) {
      this.isFetching = false;
      // handle error
    }
  }
}

export default MailService;
