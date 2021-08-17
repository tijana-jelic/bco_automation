describe('Homepage (no page-objects)', () => {
  it('Homepage has header title', () => {
    browser.url("https://work.co");
    $('[data-test-id="header-title-text"').waitForDisplayed();
    expect($('[data-test-id="header-title-text"').getText()).to.equal("We design and ship digital products that transform companies.");
  });

  it('Homepage logo is visible', () => {
    expect($('[data-test-id="global-menu-btn"').isDisplayed()).to.equal(true);
  });
});
