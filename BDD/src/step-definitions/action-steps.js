const { When } = require('@wdio/cucumber-framework');
const { pages } = require('../features/po');

When('I open {string} page', function (pageName) {
    return pages(pageName).open();
  });

When('I click {string} link from the side menu', function (link) {
    return pages('dashboard').sideMenu.item(link).click();
  });

When('I click add new doctor button from list header', function () {
    return pages('doctors').doctorListHeader.addNewDoctorBtn.click();
  });
  
When('I click {string} button in modal window', function (button) {
    return pages('doctors').addDoctorModal.clickButton(button);
  });
  
When('I wait {int} seconds', function (timeToWaitInSeconds) {
    return browser.pause(timeToWaitInSeconds * 1000);
  });

