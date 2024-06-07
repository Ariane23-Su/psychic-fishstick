const BaseComponent = require('../common/base.component')

class PatientListHeaderComponent extends BaseComponent {

    constructor() {
        super('.patient-operations')
    }

    get addNewPatientBtn() {
        return this.rootEl.$('button.e-control');

    }
}

module.exports = PatientListHeaderComponent;