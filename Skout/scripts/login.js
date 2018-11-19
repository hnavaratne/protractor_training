const login = require('../pages/homePage');
const interested = require('../pages/whoAreYouIntPage');
const common = require('../commonScripts/common');

// URL of the home page
const homeURL = 'https://www.skout.com/';

// Data used for testing
const userName = 'virtusa.protractor@gmail.com';
const password = '1qaz2wsx@';
const goMeetBtn = element(by.xpath('//*[text()="Go meet someone"]'));
const skoutLogo = element(by.xpath('//div[@data-emoji="Protractor Testing"]'));
const fbAgreeBtn = element(by.xpath('//*[text()="Agree"]'));
const fbEmail = element(by.id('email'));
const fbPassword = element(by.id('pass'));

// Test login with correct credentials
describe('Login to the page', () => {
  xit('Login to the page with valid credentials', () => {
    common.firstThings();
    common.navigateToPage(homeURL);
    browser.sleep(5000);
    login.loginHomePage(userName, password);
    browser.sleep(5000);
    expect(goMeetBtn.isPresent()).toBe(true);
    interested.interestWomen();
    browser.sleep(5000);
    expect(skoutLogo.isPresent()).toBe(true);
  });

  // Test adding a new user
  xit('Test adding New User', () => {
    const gender = 'Man';
    const interest = 'Women';
    common.firstThings();
    common.navigateToPage(homeURL);
    browser.sleep(5000);
    login.newUser('James Plunket', 'June', '15', '1990', gender, interest);
    browser.sleep(5000);
  });
  // Test clicking on Google play
  xit('Test Link for Google play', () => {
    login.googlePlayClick();
    common.switchTab();
    const EC = protractor.ExpectedConditions;
    EC.urlContains('https://play.google.com/store/apps/details?id=com.skout.android');
  });

  // Test going to Apple Store
  xit('Test Link for App Store', () => {
    login.appStoreClick();
    common.switchTab();
    const EC = protractor.ExpectedConditions;
    EC.urlContains('https://itunes.apple.com/us/app/skout/id302324249');
  });
  // Login with incorrect credentials
  xit('Test incorrect credentials', () => {
    common.firstThings();
    common.navigateToPage(homeURL);
    browser.sleep(5000);
    login.loginHomePage('virtusa.protractor@yahoo.com', password);
    browser.sleep(5000);
    expect(goMeetBtn.isPresent()).toBe(true);
  });
  // Test the FB login
  it('Test login with Facebook', () => {
    common.firstThings();
    common.navigateToPage(homeURL);
    login.clickOnFB();
    expect(fbAgreeBtn.isPresent()).toBe(true);
    login.acceptFBTerm();
    expect(fbEmail.isPresent()).toBe(true);
    expect(fbPassword.isPresent()).toBe(true);
    login.submitFBCreds(userName, password);
  });
});
