export default class Page {
  constructor(path) {
    this.path = path;
  }
  get logo() { return $('[data-test-id="global-menu-btn"'); }
  
  open () {
    browser.url(this.path);
  }
}
