const DashboardPage = require('./dashboard.page');
const DoctorsPage = require('./doctors.page');
const PatientsPage = require('./patients.page');
const AppointmentsPage = require('./appointments.page');

/**
 * @param name {'dashboard' | 'doctors' | 'patients' | 'appointments'}
 * @returns {DashboardPage|DoctorsPage|PatientsPage|AppointmentsPage}
 */


function pages(name) {
    const items = {
        dashboard: new DashboardPage(),
        doctors: new DoctorsPage(),
        patients: new PatientsPage(),
        appointments: new AppointmentsPage()

    }
    return items[name.toLowerCase()];
}

module.exports = {
    DashboardPage,
    DoctorsPage,
    PatientsPage,
    AppointmentsPage,
    pages
}