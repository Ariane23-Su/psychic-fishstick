const BaseComponent = require('../common/base.component')

class AppointmentToolbarComponent extends BaseComponent {

    constructor() {
        super('.e-toolbar-items.e-tbar-pos')
    }

    get dayBtn() {
        return this.rootEl.$('[aria-label="Day"]');

    }

    get weekBtn() {
        return this.rootEl.$('[aria-label="Week"]')
    }

    get monthBtn() {
        return this.rootEl.$('[aria-label="Month"]')
    }
}

module.exports = AppointmentToolbarComponent;