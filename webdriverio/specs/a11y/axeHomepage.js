import Axe from '../../helpers/a11yFunctions';
import Homepage from '../../page-objects/homepage.page';

before(() => {
  Axe.deleteReportFile('axeHomepageReport');
});

describe('Accessabilities test for Homepage - ', () => {
  it('Check axe violations and create report file - axeHomepageReport.json', () => {
    Homepage.open();
    Homepage.pageTitle.waitForDisplayed();
    let result = Axe.axeViolations();
    console.info(`Number of violations: ${result.violations.length}`);
    for (let i = 0; i < result.violations.length; i++) {
      const report = {
        desc: result.violations[i].description,
        impact: result.violations[i].impact,
        html: result.violations[0].nodes[0].html,
      };
      Axe.writeReport(report, 'axeHomepageReport');
    }
  });
});
