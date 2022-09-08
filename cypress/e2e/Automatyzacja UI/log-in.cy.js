describe("Log in test", ()=> {

    it("Should go to log in page", () => {
        cy.visit("/?controller=authentication&back=my-account");
    })

    it("Log in using custom command", () => {
        cy.fixture("users").then(user => {
            cy.login(user[0], '123j456j');
        })
    })
})