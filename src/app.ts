import { Router, RouterConfiguration } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Koło naukowe KREDEK';
    config.map([
      { route: '', name: 'home', moduleId: PLATFORM.moduleName(`pages/home/home`), title: 'Strona główna', nav: true },
      { route: 'feed', name: 'feed', moduleId: PLATFORM.moduleName('pages/feed/feed'), title: 'Blog', nav: true },
      { route: 'about', name: 'about', moduleId: PLATFORM.moduleName('pages/about/about'), title: 'O nas', nav: true },
      { route: 'course', name: 'course', moduleId: PLATFORM.moduleName('pages/course/course'), title: 'Kurs', nav: true },
      { route: 'gallery', name: 'gallery', moduleId: PLATFORM.moduleName('pages/gallery/gallery'), title: 'Galeria', nav: true },
      { route: 'contact', name: 'contact', moduleId: PLATFORM.moduleName('pages/contact/contact'), title: 'Kontakt', nav: true }
    ]);
    this.router = router;
  }
}
