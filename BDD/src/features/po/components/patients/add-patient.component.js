const BaseComponent = require('../common/base.component')

class AddPatientComponent extends BaseComponent {

    constructor() {
        super('.new-patient-dialog')
    }

    get saveBtn() {
        return this.rootEl.$('.e-footer-content button.e-primary')

    }

    
    /**
   * @param name {'name' | 'birthdate' | 'phone' | 'email' | 'symptoms' | 'genderf' | 'error'}
   */


    input(name) {
        const selectors = {
            name:"[name='Name']",
            birthdate:"#DOB_input",
            phone:"#PatientMobile",
            email:"[name='Email']",
            symptoms:"[name='Symptoms']",
        }
    return this.rootEl.$(selectors[name.toLowerCase()]);
    }

    item(name) {
        const selectors = {
            genderf:"#doctorCheckFemale",
            error:"#undefined-info",
        }
    return this.rootEl.$(selectors[name.toLowerCase()]);
    }
}

module.exports = AddPatientComponent;