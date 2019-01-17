/**
 * All tests related to gallery page is written in this test
 *
 * Author : Piyumi
 * Date : 10-29-2018
 *
 */
'use strict';

var common = require('../commonScripts/common');
var uploadProfilePage = require('../pages/galleryPage');

describe('Upload a profile picture and remove the uploaded picture', function () {
  it('Login to skout, upload a picture and delete the uploaded picture', function () {
    common.loginToApp();

    uploadProfilePage.get();
    uploadProfilePage.uploadImage();
    browser.sleep(2000);
    expect(uploadProfilePage.checkUploadedImage().isPresent()).toBe(true);
    uploadProfilePage.deleteImage();
    expect(uploadProfilePage.checkUploadedImage().isPresent()).toBe(false);
  });
});
