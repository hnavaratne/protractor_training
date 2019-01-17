exports.config = {
  directConnect:true,
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./scripts/uploadProfilePic.js'],
  allScriptsTimeout: 999999,
    jasmineNodeOpts: {
        defaultTimeoutInterval: 999999
    },
    onPrepare: function () {
      browser.manage().window().maximize();
      browser.manage().timeouts().implicitlyWait(5000);
      browser.ignoreSynchronization = true;
    },
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      prefs: {
        download: {
          'prompt_for_download': false,
          'directory_upgrade': true,
          'default_directory': 'C:/Protractor/'
        }
      }
    }
  },
}
