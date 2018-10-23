import {autoinject, noView, bindable} from 'aurelia-framework';

const recaptchaCallbackName = 'setRecaptchaReady';
const ready = new Promise(resolve => window[recaptchaCallbackName] = resolve);

let script = document.createElement('script');
script.src = `https://www.google.com/recaptcha/api.js?onload=${recaptchaCallbackName}&render=explicit`;
script.async = true;
script.defer = true;
document.head.appendChild(script);

@noView()
@autoinject()
export class GoogleRecaptchaCustomElement {
  @bindable verified;

  constructor(private element: Element) {}

  attached() {
    ready.then(() => grecaptcha.render(this.element as HTMLElement, { 
      sitekey: "6Lc4SxUUAAAAAN_q-3QhozeBfUC_jQTRyYwtHWqn", 
      callback: this.verified
    }));
  }
}