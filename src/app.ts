import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router : Router;

  configureRouter(config : RouterConfiguration, router : Router) {
    const pages = 'resources/pages';

    config.title = 'Koło naukowe KREDEK';
    config.map([
      { route: '', name: 'home', moduleId: `${pages}/home/home`, title: 'Strona główna' },
      { route: 'feed', name: 'feed', moduleId: `${pages}/feed/feed`, title: 'Blog' },
      { route: 'about', name: 'about', moduleId: `${pages}/about/about`, title: 'O nas' },
      { route: 'course', name: 'course', moduleId: `${pages}/course/course`, title: 'Kurs' },
      { route: 'gallery', name: 'gallery', moduleId: `${pages}/gallery/gallery`, title: 'Galeria' },
      { route: 'contact', name: 'contact', moduleId: `${pages}/contact/contact`, title: 'Kontakt' }
    ]);
    this.router = router;
  }
}
