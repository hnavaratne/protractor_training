/**
 * All functions and elements related to buzz page (the page that you see once you login) is written in this page class
 *
 * Author : Piyumi
 * Date : 10-07-2018
 *
 */
'use strict';

var BuzzPage = function () {
  // buzz page elements
  const chat = element(by.xpath("//div[@class='tablabel text-ellipsis']"));
  const friendRequests = element(by.xpath("//li[@data-ng-controller='ContactsCtrl']"));
  const notifications = element(by.xpath("//li[@data-ng-controller='NotificationsCtrl']"));
  const settingsDropdown = element(by.xpath("//li[@class='btn-group']"));

  // buzz page functions

  // buzz Page URL. Use this function to navigate to buzz page.
  this.get = function () {
    browser.get('https://www.skout.com/buzz');
  };

  // This functions allows user to click on any link in the left pane. When calling this function, send the link name that you want to click
  this.clickOnLink = function (LinkName) {
    element(by.xpath("//*[text()='" + LinkName + "']")).click();
  };

  // This function allows user to click on chat window
  this.clickOnChat = function () {
    chat.click();
  };

  // User can check for friend requests by using this function
  this.checkFriendRequests = function () {
    friendRequests.click();
  };

  // This function allows user to check for notifications
  this.checkNotifications = function () {
    notifications.click();
  };

  // This functions allows user to click on any link in the settings dropdown. When calling this function, send the drop down option name that you want to click
  this.selectOptionFromSettingsDropdown = function (dropDownOption) {
    settingsDropdown.click();
    element(by.xpath("//li[@class='btn-group open']//*[text()='" + dropDownOption + "']")).click();
  };
};

module.exports = new BuzzPage();
