const BaseComponent = require('./base.component')

class SideMenuComponent extends BaseComponent {

constructor() {
    super('#plannerSiderBar');

}
    get name() {
        return this.rootEl.$('.name');
    }

    /**
   * @param name {'dashboard' | 'schedule' | 'doctors' | 'patients'}
   */


    item(name) {
        const selectors = {
            dashboard:"div.dashboard",
            schedule:"div.calendar",
            doctors:"div.doctors",
            patients:"div.patients"
        };
        return this.rootEl.$(selectors[name.toLowerCase()]);
    }
}

module.exports = SideMenuComponent;