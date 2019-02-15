/* eslint-disable no-undef */
/**
 * homePage script has all the functions related to the home page of skout
 * @author Shavik
 * @version 1.0
 * @since 11-11-2018
 */


var WhoAreYouInt = function () {
	var menBtn = element(by.xpath('//div[@class="btn-group btn-group-justified"]//*[text()="Men"]'));
	var womenBtn = element(by.xpath('//div[@class="btn-group btn-group-justified"]//*[text()="Women"]'));
	var bothBtn = element(by.xpath('//div[@class="btn-group btn-group-justified"]//*[text()="Both"]'));
	var goMeetBtn = element(by.xpath('//*[text()="Go meet someone"]'));

	// This function is to click on Interested in Men
	this.interestMen = function interestMen () {
		menBtn.click();
		goMeetBtn.click();
	};
	// This function is to click on Interested in Men
	this.interestWomen = function interestWomen () {
		womenBtn.click();
		goMeetBtn.click();
	};
	// This function is to click on Interested in Men
	this.interestBoth = function interestBoth () {
		bothBtn.click();
		goMeetBtn.click();
	};
};

module.exports = new WhoAreYouInt();
