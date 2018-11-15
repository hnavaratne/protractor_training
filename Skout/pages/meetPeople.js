/* eslint-disable no-undef */
/**
 * homePage script has all the functions related to the home page of skout
 * @author Shavik
 * @version 1.0
 * @since 11-14-2018
 */
'use strict'

// This is to call the common functions being used
var common = require('../commonScripts/common')
var buzzPage = require('../pages/buzzPage')
var MeetPeoplePage = function () {
  // Search settings button
  var searchSettingsBtn = element(by.xpath('//span[@class="sk sk-world"]'))
  var area = element(by.name('distance'))
  var startAge = element(by.xpath('//input[@data-ng-model="newFilters.minAge"]'))
  var endAge = element(by.xpath('//input[@data-ng-model="newFilters.maxAge"]'))
  var saveBtn = element(by.xpath('//button[text()="Save Changes"]'))
  /**
   * This function is to click on the Search Settings
   */
  this.clickSearch = function clickSearch () {
    common.waitElementToBeClickable(searchSettingsBtn)
    searchSettingsBtn.click()
  }
  /**
    * This function is to click on the gender that person interested in. Accepted values showme-men,showme-women,showme-both
    */
  this.showMe = function showMe (showmeVal) {
    var showMeBtn = element(by.xpath(`//label[@for="${showmeVal}"]`))
    common.waitElementToBeClickable(showMeBtn)
    showMeBtn.click()
  }
  /**
   * This function is to filter the users who are looking for a gender. Accepted values interestedin-men,interestedin-women,interestedin-both
   */
  this.interestedIn = function interestedIn (intIn) {
    var interestedBtn = element(by.xpath(`//label[@for="${intIn}"]`))
    common.waitElementToBeClickable(interestedBtn)
    interestedBtn.click()
  }
  /**
   * This function is to select the search area. Accepted values Here,City,State,Country,World
   */
  this.selectArea = function selectArea (closeArea) {
    common.waitElementToBeClickable(area)
    area.element(by.xpath(`//option[text()="${closeArea}"]`)).click()
  }
  /**
   * This function is to set the min age for the selection
   */
  this.enterMinAge = function enterMinAge (minAge) {
    common.waitElementToBeClickable(startAge)
    startAge.sendKeys(minAge)
  }
  /**
   * This function is to set the max age for the selection
   */
  this.enterMaxAge = function enterMaxAge (maxAge) {
    common.waitElementToBeClickable(endAge)
    startAge.sendKeys(maxAge)
  }
  /**
   * This function is to save the filter
   */
  this.saveFilter = function saveFilter () {
    common.waitElementToBeClickable(saveBtn)
    saveBtn.click()
  }
}

module.exports = new MeetPeoplePage()
