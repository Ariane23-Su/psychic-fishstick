const BaseComponent = require('../common/base.component');

class PatientRowComponent extends BaseComponent {

    
    constructor() {
        super('[aria-rowindex="8"]');
    }

    get name() {
        return this.rootEl.$('.patient-name');
    }

}

module.exports = PatientRowComponent;