import {autoinject} from 'aurelia-framework';
import {HttpService} from './http-service';

@autoinject()
export class RecaptchaService {

  constructor(private http: HttpService) {}
  
  async verify(token): Promise<boolean> {
    try {
      let response = await this.http.post('recaptcha', token);

      return response.status === 200 ? true : false;
    } catch (error) {
      return false;
    }
  }
}
