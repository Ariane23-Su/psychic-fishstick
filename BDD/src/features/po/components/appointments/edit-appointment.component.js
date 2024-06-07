const BaseComponent = require('../common/base.component')

class EditAppointmentComponent extends BaseComponent {

    constructor() {
        super('#_dialog_wrapper')
    }

    get saveBtn() {
        return this.rootEl.$('.e-footer-content button.e-event-save.e-flat')

    }

    get deleteBtn() {
        return this.rootEl.$('.e-footer-content button.e-event-delete.e-flat')
    }

    /**
   * @param name {'name' | 'location'}
   */


    input(name) {
        const selectors = {
            name:"#PatientName",
            location:"[name='Location']",
        }
    return this.rootEl.$(selectors[name.toLowerCase()]);
    }
}

module.exports = EditAppointmentComponent;