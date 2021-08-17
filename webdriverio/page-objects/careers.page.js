import Page from './page';

class Careers extends Page {
  constructor() {
    super('./careers');
  }

  get quote() { return $('[data-test-id="undefined-section-quote"'); }

}
export default new Careers();
