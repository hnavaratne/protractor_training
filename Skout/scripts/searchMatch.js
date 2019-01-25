// Data used for testing
const userName = 'virtusa.protractor@gmail.com';
const password = '1qaz2wsx@';
const goMeetBtn = element(by.xpath('//*[text()="Go meet someone"]'));
const skoutLogo = element(by.xpath('//div[@data-emoji="Protractor Testing"]'));
const searchSettingsBtn = element(by.xpath('//span[@class="sk sk-world"]'));
const area = element(by.name('distance'));
const searchResult = element(by.xpath('//span[@emoji="Samantha"]'));

const login = require('../pages/homePage');
const meet = require('../pages/meetPeople');
const interested = require('../pages/whoAreYouIntPage');
const common = require('../commonScripts/common');
const buzz = require('../pages/buzzPage');

describe('Testing Meet people page', () => {
	it('Login Test', () => {
		common.firstThings();
		login.navigateHome();
		login.loginHomePage(userName, password);
		expect(goMeetBtn.isPresent()).toBe(true);
	});
	// Interested page
	it('Test Interested page load', () => {
		interested.interestWomen();
		expect(skoutLogo.isPresent()).toBe(true);
	});
	// Test navigation
	it('Navigate Test', () => {
		buzz.clickOnLink('Meet people');
		meet.clickSearch();
		expect(searchSettingsBtn.isPresent()).toBe(true);
	});
	it('Select Show Me', () => {
		meet.showMe('showme-women');
		expect(element(by.xpath('//label[@for="showme-women"]')).isPresent()).toBe(true);
	});
	it('Select interested', () => {
		meet.interestedIn('interestedin-men');
		expect(element(by.xpath('//label[@for="interestedin-men"]')).isPresent()).toBe(true);
	});
	// Click on Search settings
	it('Enter Area', () => {
		meet.selectArea('City');
		expect(area.element(by.xpath('//option[text()="City"]')).isPresent()).toBe(true);
	});
	it('Enter Age', () => {
		meet.enterMinAge('18');
		meet.enterMaxAge('20');
	});
	it('Save Changes', () => {
		meet.saveFilter();
		browser.sleep(5000);
		expect(searchResult.isPresent()).toBe(true);
		browser.sleep(5000);
	});
});
