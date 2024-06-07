const { pages } = require('./../po');

describe("Register new doctor", () => {

  beforeEach(async () => {
    await pages('dashboard').open();
    });

    it("Open modal window for adding a new doctor", async() =>{
      await pages('dashboard').sideMenu.item('doctors').click();
      await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
      await expect(pages('doctors').addDoctorModal.rootEl).toBeDisplayed();
    });

    it("Add a new doctor", async() =>{
    await pages('dashboard').sideMenu.item('doctors').click();
    await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
    await pages('doctors').addDoctorModal.rootEl.waitForDisplayed();
    await pages('doctors').addDoctorModal.input('name').setValue("Joe Black");
    await pages('doctors').addDoctorModal.input('phone').setValue("(412)-345-4657");
    await pages('doctors').addDoctorModal.input('email').setValue("jb@gmail.com");
    await pages('doctors').addDoctorModal.input('education').setValue("Graduate school");
    await pages('doctors').addDoctorModal.saveBtn.click();

    await expect(pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();

    await expect(pages('doctors').specialistCard(8).name).toHaveTextContaining("Dr. Joe Black");
    await expect(pages('doctors').specialistCard(8).education).toHaveTextContaining("Graduate school", {
      ignoreCase: true,
   });
 }); 

 it("Close the modal window after adding a new doctor", async () => {
  await pages('dashboard').sideMenu.item('doctors').click();
  await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
  await pages('doctors').addDoctorModal.closeBtn.click();
  await expect(pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();
});


  it("View error when leaving Email-info field empty", async() => {
    await pages('dashboard').sideMenu.item('doctors').click();
    await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
    await pages('doctors').addDoctorModal.rootEl.waitForDisplayed();
    await pages('doctors').addDoctorModal.input('name').setValue("John Doe");
    await pages('doctors').addDoctorModal.input('phone').setValue("(412)-345-4657");
    await pages('doctors').addDoctorModal.saveBtn.click();

    await expect(pages('doctors').addDoctorModal.item('error').toHaveText("Enter valid email"));
  });
});

