import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router : Router;

  configureRouter(config : RouterConfiguration, router : Router) {
    const pages = 'resources/pages';

    config.title = 'Koło naukowe KREDEK';
    config.map([
      { route: '', name: 'home', moduleId: `${pages}/home/home`, title: 'Strona główna', nav: true },
      { route: 'feed', name: 'feed', moduleId: `${pages}/feed/feed`, title: 'Blog', nav: true },
      { route: 'about', name: 'about', moduleId: `${pages}/about/about`, title: 'O nas', nav: true },
      { route: 'course', name: 'course', moduleId: `${pages}/course/course`, title: 'Kurs', nav: true },
      { route: 'gallery', name: 'gallery', moduleId: `${pages}/gallery/gallery`, title: 'Galeria', nav: true },
      { route: 'contact', name: 'contact', moduleId: `${pages}/contact/contact`, title: 'Kontakt', nav: true }
    ]);
    this.router = router;
  }
}
