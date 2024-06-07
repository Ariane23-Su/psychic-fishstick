const BaseComponent = require('../common/base.component')

class QuickEditAppointmentComponent extends BaseComponent {

    constructor() {
        super('.e-event-popup')
    }

    get editBtn() {
        return this.rootEl.$('.e-popup-footer button.e-primary')

    }

    get deleteBtn() {
        return this.rootEl.$('.e-popup-footer button.e-flat')
    }

}

module.exports = QuickEditAppointmentComponent;