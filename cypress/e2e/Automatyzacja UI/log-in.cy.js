describe("Log in test", ()=> {

    it("Should go to log in page", () => {
        cy.visit("/?controller=authentication&back=my-account");
    })

    it("Log in using Custom Commands", () => {
        cy.fixture("registeredUsers").then(user => {
            cy.login(user[0].email, user[0].password);

            //Create account using registeredUser.json record
            //Press login button in Custom Command
            //Intercept authentication token
        })
    })
})