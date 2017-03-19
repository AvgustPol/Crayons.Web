import {autoinject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

@autoinject()
export class HttpService {
  constructor(private http: HttpClient) {
    http.configure(config => {
      config.useStandardConfiguration()
        .withBaseUrl('http://localhost:5000/api/');
    });
  }

  get(url: string): Promise<any> {
    return this.http.fetch(url);
  }

  post(url: string, data: any): Promise<any> {
    return this.http.fetch(url, {
      method: 'POST',
      body: json(data)
    });
  }
}
