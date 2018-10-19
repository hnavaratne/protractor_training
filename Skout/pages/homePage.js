/**
 * homePage script has all the functions related to the home page of skout
 * 
 * @author Shavik
 * @version 1.0
 * @since 10-04-2018
 * 
 */
"use strict";

var homePage = function () {

    //This is to call the common functions being used
    var common = require('../commonScripts/common');

    //Login page elements
    var username = element(by.id('username'));
    var password = element(by.id('password'));
    var submitBtn = element(by.buttonText('Log in'));

    var googlePlay = element(by.className('googleplay'));
    var appStore = element(by.className('appstore'));

    var name = element(by.id('name'));
    var bdayMonth = element(by.id('birthday-month'));
    var bdayDay = element(by.id('birthday-day'));
    var bdayYear = element(by.id('birthday-year'));
    var submitBtn = element(by.buttonText('Sign up'));
    /**
     * This is to login to the page
     * @param userName - Username of the user, will be taken from test
     * @param passwrd - Password of the user, will be taken from the test
     */
    this.loginHomePage = function loginHomePage(userName, passwrd) {

        common.waitElementToBeClickable(username);
        username.sendKeys(userName);
        password.sendKeys(passwrd);
        submitBtn.click();

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
     * @param month Enter the month name January,February,March,April,May,June,July,August,September,October,November,December
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

};

module.exports = new homePage();