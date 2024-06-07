const { pages } = require('./../po');

describe("View appointments", () => {

    beforeEach(async () => {
      await pages('dashboard').open();
      });
  
    it("Check default view", async() => {
      await pages('dashboard').sideMenu.item('schedule').click();

      await expect(pages('appointments').appointmentToolbar.weekBtn.toBeDisabled(false));

    });

    it("Navigate to Day view", async() => {
      await pages('dashboard').sideMenu.item('schedule').click();
      await pages('appointments').appointmentToolbar.dayBtn.click();
      
      await expect(pages('appointments').appointmentToolbar.dayBtn.toBeDisabled(false));

    });

    it("Navigate to Month view", async() => {
      await pages('dashboard').sideMenu.item('schedule').click();
      await pages('appointments').appointmentToolbar.monthBtn.click();
      
      await expect(pages('appointments').appointmentToolbar.monthBtn.toBeDisabled(false));
      
    });
});