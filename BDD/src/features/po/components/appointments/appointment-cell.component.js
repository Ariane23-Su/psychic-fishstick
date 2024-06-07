const BaseComponent = require('../common/base.component');

class AppointmentCellComponent extends BaseComponent {

    constructor(id) {
        super(`[data-id='Appointment_${id}']`);
    }

    get name() {
        return this.rootEl.$('.e-subject');
    }

    get location() {
        return this.rootEl.$('.e-location');
    }

}

module.exports = AppointmentCellComponent;