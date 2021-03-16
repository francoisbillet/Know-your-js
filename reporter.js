const { green, red, yellow, bgRed, bgGreen } = require("chalk");

const { log } = console;

class CustomReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
  }

  onRunComplete(test, results) {
    const {
      numFailedTests,
      numPassedTests,
      numPendingTests,
      numTotalTests,
      numFailedTestSuites,
      numPassedTestSuites,
      numPendingTestSuites,
      numTotalTestSuites,
      testResults,
      testExecError,
    } = results;

    log(
      `\nFound ${numTotalTestSuites} test suites (`,
      `${red(`${numFailedTestSuites} failed`)}, ${green(
        `${numPassedTestSuites} passed`
      )}, ${numPendingTestSuites} skipped)\n`
    );
    log(
      `Found ${numTotalTests} tests (`,
      `${red(`${numFailedTests} failed`)}, ${green(
        `${numPassedTests} passed`
      )}, ${yellow(`${numPendingTests} skipped`)})\n`
    );

    testResults.forEach((suite) => {
      if (suite.testExecError) {
        console.log(red(suite.testExecError.stack));
      }

      if (suite.numFailingTests > 0) {
        log(
          bgRed.bold(" FAILED "),
          red(suite.testFilePath),
          "(",
          green(`${suite.numPassingTests} passed`),
          "/",
          red(`${suite.numFailingTests} failed`),
          "/",
          yellow(`${suite.numPendingTests} skipped`),
          ")"
        );
        suite.testResults.forEach((test) => {
          const color = test.status === "passed" ? green : red;
          const char = test.status === "passed" ? "✓" : "✖";
          console.log(`${color(`${char} ${test.fullName}`)}`);
        });
      } else if (suite.numPassingTests > 0) {
        log(bgGreen.bold(" SUCCESS "), ` ${green(suite.testFilePath)}`);
        // No details for successful suites
      }
      log();
    });
  }
}

module.exports = CustomReporter;
