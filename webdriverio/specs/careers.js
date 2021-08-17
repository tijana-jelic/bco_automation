import Careers from '../page-objects/careers.page';

describe('Careers page', () => {
  it('Careers has quote', () => {
    Careers.open();
    Careers.quote.waitForDisplayed();
    const quoteText = '“Work & Co’s employees are treated a bit differently… This might be why the agency has a 93 percent employee retention rate.”'
    expect(Careers.quote.getText()).to.equal(quoteText);
  });
  it('Careers page - logo is visible', () => {
    expect(Careers.logo.isDisplayed()).to.equal(true);
  });
});
