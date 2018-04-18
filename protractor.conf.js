var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var AllureReporter = require('jasmine-allure-reporter');


exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
 //seleniumServerJar:'/home/higorlucas/.nvm/versions/node/v6.9.5/lib/node_modules/protractor/node_modules/webdriver-manager/selenium-server-standalone-3.7.1.jar',


    // Spec patterns are relative to the location of this config.
  specs: [
    'webapp/e2e/spec/*.js'
  ],


  capabilities: {
    'browserName': 'firefox',
    'chromeOptions': {'args': ['--disable-extensions']}
  },

    // multiCapabilities: [{
    //     'browserName': 'chrome'
    // }, {
    //     'browserName': 'chrome'
    // },{
    //     'browserName': 'chrome'
    // }],

    onPrepare:function() {

        global.isAngularSite = function (flag) {
            browser.ignoreSynchronization = !flag;
        };

        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true
        }));
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png,'base64')
                }, 'image/png')();
                done();
            })
        });
        beforeEach(function() {
            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 500000;
        });
        afterEach(function() {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });
        // browser.manage().window().setSize(1600, 1000);
    },

    allScriptsTimeout: 120000,
    getPageTimeout: 120000,

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 10000
  }
}