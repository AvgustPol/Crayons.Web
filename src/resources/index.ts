import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    './elements/loading-indicator.html',
    './elements/error-indicator.html'
  ]);
}
