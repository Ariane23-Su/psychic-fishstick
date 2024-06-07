const BasePage = require('./base.page');

const { PatientListHeader, AddPatientModal, PatientRow } = require('../components');

class PatientsPage extends BasePage {

    constructor() {
        super('/showcase/angular/appointmentplanner/#/patients');
        this.patientListHeader = new PatientListHeader();
        this.addPatientModal = new AddPatientModal();
        this.patientRow = new PatientRow()
    }

}

module.exports = PatientsPage;