import Page from './page';

class Homepage extends Page {
  constructor() {
    super('./');
  }

  get pageTitle() { return $('[data-test-id="header-title-text"'); }

}
export default new Homepage();
