import {HttpClient, json} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';

@autoinject()
export class RecaptchaService {

  constructor(private http: HttpClient) {
    http.configure(config => {
      config.useStandardConfiguration()
        .withBaseUrl('http://localhost:5000/api/');
    });
  }
  
  async verify(token): Promise<boolean> {
    try {
      let response = await this.http.fetch('recaptcha', {
        method: 'POST',
        body: json(token)
      });

      return response.status === 200 ? true : false;
    } catch (error) {
      return false;
    }
  }
}