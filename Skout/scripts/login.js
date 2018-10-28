"use strict";

var login = require('../pages/homePage');
var common = require('../commonScripts/common');

//URL of the home page
var homeURL = 'https://www.skout.com/';

//Data used for testing
var userName = 'virtusa.protractor@gmail.com';
var password = '1qaz2wsx@';

describe('Login to the page', function () {
    xit('Login to the page with valid credentials', function () {
        common.firstThings();
        common.navigateToPage(homeURL);
        browser.sleep(5000);
        login.loginHomePage(userName, password);
        browser.sleep(5000);

    });

    it('New User', function () {
        var gender = 'Man';
        var interest ='Women';
        common.firstThings();
        common.navigateToPage(homeURL);
        browser.sleep(5000);
        login.newUser('James Plunket', 'June', '15', '1990', gender, interest);
        browser.sleep(5000);
    });

    xit('Google play', function () {
        login.googlePlayClick();
        common.switchTab();
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.urlContains('https://play.google.com/store/apps/details?id=com.skout.android'), 5000);
    });


    xit('App Store', function () {
        login.appStoreClick();
        common.switchTab();
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.urlContains('https://itunes.apple.com/us/app/skout/id302324249'), 5000);
    });


});