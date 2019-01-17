class BlogPage {
  constructor () {
    var menu_categories = element(by.xpath("//div[@id='navigation-top']//a[text()='CATEGORIES']"));
    var menu_careers = element(by.xpath("//div[@id='navigation-top']//a[text()='CAREERS']"));
    var menu_safetytips = element(by.xpath("//div[@id='navigation-top']//a[text()='SAFETY TIPS']"));
    var menu_search = element(by.xpath("//div[@id='navigation-top']//a[@href='/new-page']"));
    // var category_All=element(by.xpath("//div[@id='navigation-top']//li[@class='page-collection']/a[text()='ALL']"));
    var instagram_icon = element(by.xpath(".//div[@id='navigation-top']//a[@href='http://instagram.com/skoutapp']"));
    var pinterest_icon = element(by.xpath("//div[@id='navigation-top']//a[@href='https://www.pinterest.com/SkoutApp/']"));
    var twitter_icon = element(by.xpath("//div[@id='navigation-top']//a[@href='https://twitter.com/skoutapp']"));
    var btn_MorePost = element(by.xpath("//a[text()='MORE POSTS']"));
    var btn_More = element(by.xpath("//a[text()='MORE']"));
    var btn_googlePlay = element(by.xpath("//a[@href='http://play.google.com/store/apps/details?id=com.skout.android']"));
    var btn_AppStore = element(by.xpath("//a[@href='http://itunes.apple.com/us/app/skout/id302324249']"));
    this.navigateBlogPage = function () {
      browser.get('http://blog.skout.com/');
    };
    this.getblogPageTitle = function () {
      return browser.getTitle();
    };
    this.selectAnyOptionfromCategories = function (categoryOption) {
      browser.waitForAngular();
      browser.actions().mouseMove(menu_categories).perform();
      browser.sleep(3000);
      element(by.xpath("//div[@id='navigation-top']//li[@class='page-collection']/a[text()='" + categoryOption + "']")).click();
    };
    this.navigateToCareersPage = function () {
      menu_careers.click();
    };
    this.navigateToSafetytipsPage = function () {
      menu_safetytips.click();
    };
    this.navigateToSearch = function () {
      menu_search.click();
    };
    this.naviageToInstagram = function () {
      instagram_icon.click();
    };
    this.navigateToPinterest = function () {
      pinterest_icon.click();
      browser.sleep(5000);
    };
    this.navigateToTwitter = function () {
      twitter_icon.click();
    };
    this.viewMorePost = function () {
      btn_MorePost.click();
      browser.sleep(5000);
    };
    this.viewMore = function () {
      btn_More.click();
    };
    this.downloadGooglePlay = function () {
      btn_googlePlay.click();
    };
    this.navigateToAppStore = function () {
      btn_AppStore.click();
      browser.sleep(5000);
    };
  }
}

module.exports = new BlogPage();
