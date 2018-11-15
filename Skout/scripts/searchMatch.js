/* eslint-disable no-undef */
'use strict'
// Data used for testing
var userName = 'virtusa.protractor@gmail.com'
var password = '1qaz2wsx@'
var goMeetBtn = element(by.xpath('//*[text()="Go meet someone"]'))
var skoutLogo = element(by.xpath('//div[@data-emoji="Protractor Testing"]'))
var searchSettingsBtn = element(by.xpath('//span[@class="sk sk-world"]'))
var area = element(by.name('distance'))
var searchResult = element(by.xpath('//span[@emoji="Kimmie Jean"]'))

var login = require('../pages/homePage')
var meet = require('../pages/meetPeople')
var interested = require('../pages/whoAreYouIntPage')
var common = require('../commonScripts/common')
var buzz = require('../pages/buzzPage')

describe('Testing Meet people page', function () {
  it('Login Test', function () {
    common.firstThings()
    login.navigateHome()
    login.loginHomePage(userName, password)
    expect(goMeetBtn.isPresent()).toBe(true)
  })
  // Interested page
  it('Test Interested page load', function () {
    interested.interestWomen()
    expect(skoutLogo.isPresent()).toBe(true)
  })
  // Test navigation
  it('Navigate Test', function () {
    buzz.clickOnLink('Meet people')
    meet.clickSearch()
    expect(searchSettingsBtn.isPresent()).toBe(true)
  })
  it('Select Show Me', function () {
    meet.showMe('showme-women')
    expect(element(by.xpath(`//label[@for="showme-women"]`)).isPresent()).toBe(true)
  })
  it('Select interested', function () {
    meet.interestedIn('interestedin-men')
    expect(element(by.xpath(`//label[@for="interestedin-men"]`)).isPresent()).toBe(true)
  })
  // Click on Search settings
  it('Enter Area', function () {
    meet.selectArea('City')
    expect(area.element(by.xpath(`//option[text()="City"]`)).isPresent()).toBe(true)
  })
  it('Enter Age', function () {
    meet.enterMinAge('18')
    meet.enterMaxAge('20')
  })
  it('Save Changes', function () {
    meet.saveFilter()
    browser.sleep(5000)
    expect(element(by.xpath('//span[@emoji="Samantha"]')).isPresent()).toBe(true)
    browser.sleep(5000)
  })
})
