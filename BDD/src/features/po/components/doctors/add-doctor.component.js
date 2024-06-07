const BaseComponent = require('../common/base.component')

class AddDoctorComponent extends BaseComponent {

    constructor() {
        super('.new-doctor-dialog')
    }

    get saveBtn() {
        return this.rootEl.$('.e-footer-content button.e-primary')

    }

    get closeBtn() {
        return this.rootEl.$('.e-dlg-closeicon-btn')
    }

   /**
   * @param button {'save' | 'close'}
   */

    async clickButton(button) {
        if (button.toLowerCase() === 'save') {
            await this.saveBtn.click();
            } else {
            await this.closeBtn.click();
            }
     }

    /**
   * @param name {'name' | 'phone' | 'email' | 'education'}
   */


    input(name) {
        const selectors = {
            name:"[name='Name']",
            phone:"#DoctorMobile",
            email:"[name='Email']",
            education:"[name='Education']",
        }
    return this.rootEl.$(selectors[name.toLowerCase()]);
    }

    item(name) {
        const selectors = {
            error:"#Email-info",
        }
    return this.rootEl.$(selectors[name.toLowerCase()]);
    }
}

module.exports = AddDoctorComponent;