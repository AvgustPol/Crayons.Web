import {bindable} from 'aurelia-framework';

export class CrayonsFooterCustomElement {
  @bindable
  navigation = false;
  currentYear = new Date().getFullYear();
}