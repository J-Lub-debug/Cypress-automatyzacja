describe("Visit the given page", () => {
    it("Visit the automationpractice with hard coded url", () => {
        cy.visit("http://automationpractice.com/index.php");
    })

    it.only("Visit the automationpractice using the reference from cypress.config.js", () => {
        cy.visit("/");
    })
})