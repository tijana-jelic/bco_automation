const axeSource = require('axe-core').source;
const fs = require('fs');

class Axe {
  axeViolations() {
    browser.execute(axeSource);
    var theOptions;
    theOptions = { runOnly: { type: 'tag', values: ['wcag2aa', 'wcag2a', 'best-practice'] } };
    let results = browser.executeAsync(function (options, done) {
      axe.run(options, function (err, results) {
        if (err) done(err);
        done(results);
      });
    }, theOptions);
    return results;
  }
  deleteReportFile(fileName) {
    try {
      fs.unlinkSync(`./webdriverio/specs/a11y/${fileName}.json`);
    } catch (err) {}
  }
  writeReport(report, fileName) {
    const jsonString = JSON.stringify(report, null, 2);
    const newData = jsonString + ',\n';
    try {
      fs.appendFileSync(`./webdriverio/specs/a11y/${fileName}.json`, newData);
    } catch (err) {
      console.error(err);
    }
  }
}
export default new Axe();
