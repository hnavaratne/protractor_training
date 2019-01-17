/**
 * All functions and elements related to gallery page (where you upload a profile picture) is written in this page class
 *
 * Author : Piyumi
 * Date : 10-29-2018
 *
 */
'use strict';

var GalleryPage = function () {
  var path = require('path');

  // gallery page elements
  const fileUpload = element(by.id('file_upload'));
  const uploadedImage = element(by.xpath("//div[@data-ng-if='image.imageURL']/img"));
  const deleteImageBtn = element(by.xpath("//span[@data-ng-click='deleteProfileImage(image)']"));

  // variables
  var fileToUpload = '../images/ProfilePic.jpg';

  // gallery page functions

  // gallery Page URL. Use this function to navigate to gallery page.
  this.get = function () {
    browser.get('https://www.skout.com/profile/me/gallery');
  };

  // This function is used to upload an image
  this.uploadImage = function () {
    var absolutePath = path.resolve(__dirname, fileToUpload);
    fileUpload.sendKeys(absolutePath);
  };

  // This function is used to return the webelement, so that, it can be used to verify whther element is present or not
  this.checkUploadedImage = function () {
    return uploadedImage;
  };

  // This function can be used to delete the uploaded image
  this.deleteImage = function () {
    deleteImageBtn.click();
  };
};
module.exports = new GalleryPage();
