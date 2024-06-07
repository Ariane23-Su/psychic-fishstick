const { pages } = require('./../po');

describe("Verify the page title", () => {

    beforeEach(async () => {
        await pages('dashboard').open(); 
    });
    
    it("Check page title", async() => {
        await pages('dashboard').open();
        const pageTitle = await browser.getTitle();
    
        expect(pageTitle).toEqual("Appointment Planner - Syncfusion Angular Components Showcase App");
    });
    
    
    
});