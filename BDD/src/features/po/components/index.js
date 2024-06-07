const Header = require('./common/header.component');
const SideMenu = require('./common/sidemenu.component');

const AddDoctorModal = require('./doctors/add-doctor.component');
const DoctorListHeader = require('./doctors/list-header.component');
const SpecialistCard = require('./doctors/specialist-card.component');

const AddPatientModal = require('./patients/add-patient.component');
const PatientListHeader = require('./patients/patient-list-header.component');
const PatientRow = require('./patients/patient-row.component');

const QuickEditAppointment = require('./appointments/quick-edit-appointment.component');
const EditAppointment = require('./appointments/edit-appointment.component');
const AppointmentToolbar = require('./appointments/appointment-toolbar.component');
const AppointmentCell = require('./appointments/appointment-cell.component');



module.exports = {
    Header,
    SideMenu,
    AddDoctorModal,
    DoctorListHeader,
    SpecialistCard,
    AddPatientModal,
    PatientListHeader,
    PatientRow,
    QuickEditAppointment,
    EditAppointment,
    AppointmentToolbar,
    AppointmentCell

}