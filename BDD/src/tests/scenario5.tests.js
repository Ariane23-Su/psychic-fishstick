const { pages } = require('./../po');

describe("Manage appointments", () => {

    beforeEach(async () => {
      await pages('dashboard').open();
      });
  
      it("Delete existing appointment", async() => {
      await pages('dashboard').sideMenu.item('schedule').click();
      await pages('appointments').appointmentCell(1002).rootEl.click();
      await pages('appointments').quickEditAppointment.rootEl.waitForDisplayed();
      await pages('appointments').quickEditAppointment.deleteBtn.click();
      await expect(pages('appointments').quickEditAppointment.rootEl).not.toBeDisplayed();
      await expect(pages('appointments').appointmentCell(1002).rootEl.toBeDisplayed(false));

      });  

    it("Edit existing appointment", async() =>{
      await $("div.calendar").click();
      await pages('appointments').appointmentCell(1019).rootEl.click();
      await pages('appointments').quickEditAppointment.rootEl.waitForDisplayed();
      await pages('appointments').quickEditAppointment.editBtn.click();
      await pages('appointments').editAppointment.rootEl.waitForDisplayed();
      await pages('appointments').editAppointment.input('location').setValue("London");
      await pages('appointments').editAppointment.saveBtn.click();
      await expect(pages('appointments').editAppointment.rootEl).not.toBeDisplayed();
      await expect(pages('appointments').appointmentCell(1019).location).toHaveTextContaining("London");

    }); 
});