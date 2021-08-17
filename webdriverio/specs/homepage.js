import Homepage from '../page-objects/homepage.page';

describe('Homepage tests', () => {
  it('Homepage has header title', () => {
    Homepage.open();
    Homepage.pageTitle.waitForDisplayed();
    expect(Homepage.pageTitle.getText()).to.equal("We design and ship digital products that transform companies.");
  });
  it('Homepage logo is visible', () => {
    expect(Homepage.logo.isDisplayed()).to.equal(true);
  });
});
