import {bindable} from 'aurelia-framework';

export class SimpleFooterCustomElement {
  @bindable
  navigation = false;
  currentYear = new Date().getFullYear();
}