const BasePage = require('./base.page');

const { AppointmentToolbar, QuickEditAppointment, EditAppointment, AppointmentCell } = require('../components');

class AppointmentsPage extends BasePage {

    constructor() {
        super('/showcase/angular/appointmentplanner/#/calendar');
        this.appointmentToolbar = new AppointmentToolbar();
        this.quickEditAppointment = new QuickEditAppointment();
        this.editAppointment = new EditAppointment();
    }

    appointmentCell(id) {
        return new AppointmentCell(id);
    }

}

module.exports = AppointmentsPage;