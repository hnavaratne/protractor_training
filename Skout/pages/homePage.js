/**
 * homePage script has all the functions related to the home page of skout
 * @author Shavik
 * @version 1.0
 * @since 10-04-2018
 */
const HomePage = function HomePage() {
  // This is to call the common functions being used
  const common = require('../commonScripts/common');

  // Login page elements
  const username = element(by.id('username'));
  const password = element(by.id('password'));
  const loginBtn = element(by.buttonText('Log in'));
  // Login with facebook
  const facebook = element(by.xpath('//div[@class="col-xs-12 col-sm-12 col-md-7"]//button[@facebook-login-button="Facebook"]'));
  const fbAgreeBtn = element(by.xpath('//*[text()="Agree"]'));
  const fbEmail = element(by.id('email'));
  const fbPassword = element(by.id('pass'));
  const fbLogin = element(by.id('u_0_0'));
  const googlePlus = element(by.xpath('//div[@class="col-xs-12 col-sm-12 col-md-7"]//button[@google-plus-login-button="Google+"]'));

  const googlePlay = element(by.className('googleplay'));
  const appStore = element(by.className('appstore'));

  const name = element(by.id('name'));
  const submitBtn = element(by.buttonText('Sign up'));

  /**
   * This function is to navigate to the page
   */
  this.navigateHome = function navigateHome() {
    browser.get('https://www.skout.com/');
  };
  /**
   * This is to login to the page
   * @param userName - Username of the user, will be taken from test
   * @param passwrd - Password of the user, will be taken from the test
   */
  this.loginHomePage = function loginHomePage(userName, passwrd) {
    common.waitElementToBeClickable(username);
    username.sendKeys(userName);
    password.sendKeys(passwrd);
    loginBtn.click();
  };

  /**
   * This function is to click on google play icon
   */
  this.googlePlayClick = function googlePlayClick() {
    googlePlay.click();
  };

  /**
   * This function is to click on app store icon
   */
  this.appStoreClick = function appStoreClick() {
    appStore.click();
  };

  /**
   * This function is to add a new user to the skout
   * @param nameF Name to be used in the system
   * @param month Enter the month name January,February,March,April,May,
   * June,July,August,September,October,November,December
   * @param day Enter the day 1 - 31
   * @param year Enter the birth year 1920 - 2018
   * @param gender Give the gender Man, Women
   * @param pref Give the gender preferennce Men, Women, Both
   */
  this.newUser = function newUser(nameF, month, day, year, gender, pref) {
    name.sendKeys(nameF);
    element(by.xpath(`//option[@label='${month}']`)).click();
    element(by.xpath(`//option[@label='${day}']`)).click();
    element(by.xpath(`//option[@label='${year}']`)).click();
    common.waitElementToBeClickable(element(by.xpath(`//label[@class='btn btn-default iam-options']/..//*[contains(text(),'${gender}')]`)));
    element(by.xpath(`//label[@class='btn btn-default iam-options']/..//*[contains(text(),'${gender}')]`)).click();
    element(by.xpath(`//label[@class='btn btn-default interested-options']/..//*[contains(text(),'${pref}')]`)).click();
    submitBtn.click();
  };

  /**
   * This function is to click on Facebook
   */
  this.clickOnFB = function clickOnFB() {
    common.waitElementToBeClickable(facebook);
    facebook.click();
  };
  /**
   * This function is to accept the terms pop up
   */
  this.acceptFBTerm = function acceptFBTerm() {
    common.waitElementToBeClickable(fbAgreeBtn);
    fbAgreeBtn.click();
    common.switchTab();
  };
  /**
 * This function is to enter FB credentials
 * @param _fbuser enter the FB user name/email
 * @param _fbpass enter the FB password
 */
  this.submitFBCreds = function submitFBCreds(_fbuser, _fbpass) {
    common.switchTab();
    common.waitElementToBeClickable(fbEmail);
    common.waitElementToBeClickable(fbPassword);
    fbEmail.sendKeys(_fbuser);
    fbPassword.sendKeys(_fbpass);
    fbLogin.click();
  };

  /**
   * This function is to login with Google+
   */
  this.loginwithGooglePlus = function loginwithGooglePlus() {
    googlePlus.click();
    browser.sleep(5000);
  };
};

export default new HomePage();
