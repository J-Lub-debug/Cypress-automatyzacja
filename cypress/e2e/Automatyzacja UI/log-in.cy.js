describe("Log in test", ()=> {

    it("Should go to log in page", () => {
        cy.visit("/?controller=authentication&back=my-account");
    })

    /*it("Log in using Custom Commands", () => {
        cy.fixture("registeredUsers").then(user => {
            cy.login(user[0].email, user[0].password);
            //Intercept authentication token
            cy.intercept("POST", "http://automationpractice.com/index.php?controller=authentication", )
        })
    })
    */

    it("Log in using Custom Commands", () => {
        cy.fixture("registeredUsers").then(user => {
            const authorizationData = {
                "user": {
                    "email": user[0].email,
                    "passwd": user[0].password
                }
            }
            //cy.intercept("POST", "http://automationpractice.com/index.php?controller=my-account", authorizationData);

            //Intercept authentication token
            cy.request("POST", "http://automationpractice.com/index.php?controller=authentication", authorizationData)
            .its("body").then(response => {
                console.log(response); //token and static token are stored in html doc type in var static_token AND var token
            })
        })
    })
})