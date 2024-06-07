const { pages } = require('./../po');

describe('Register new patient', () => {

    beforeEach(async () => {
        await pages('dashboard').open();
    });

    it("Add new patient", async() => {
        await pages('dashboard').sideMenu.item('patients').click();
        await pages('patients').patientListHeader.addNewPatientBtn.click();
        await pages('patients').addPatientModal.rootEl.waitForDisplayed();
        await pages('patients').addPatientModal.input('name').setValue("Nathalie Sarraute");
        await pages('patients').addPatientModal.item('genderf').click();
        await pages('patients').addPatientModal.input('birthdate').setValue("11/12/1998");
        await pages('patients').addPatientModal.input('phone').setValue("(412)-345-4658");
        await pages('patients').addPatientModal.input('email').setValue("ns@gmail.com");
        await pages('patients').addPatientModal.input('symptoms').setValue('arrhythmia');
        await pages('patients').addPatientModal.saveBtn.click();
        await expect(pages('patients').addPatientModal.rootEl).not.toBeDisplayed();

        await expect(pages('patients').patientRow.name).toHaveTextContaining("Nathalie Sarraute");

        
    });

    it("View error when leaving Mobile Number field empty", async() => {
        await pages('dashboard').sideMenu.item('patients').click();
        await pages('patients').patientListHeader.addNewPatientBtn.click();
        await pages('patients').addPatientModal.rootEl.waitForDisplayed();
        await pages('patients').addPatientModal.input('name').setValue("Nathalie Sarraute");
        await pages('patients').addPatientModal.item('genderf').click();
        await pages('patients').addPatientModal.input('birthdate').setValue("11/12/1998");
        await pages('patients').addPatientModal.input('email').setValue("ns@gmail.com");
        await pages('patients').addPatientModal.input('symptoms').setValue('arrhythmia');
        await pages('patients').addPatientModal.saveBtn.click();

        await expect(pages('patients').addPatientModal.item('error').toHaveText("Enter valid mobile number"));
        
    });
});
