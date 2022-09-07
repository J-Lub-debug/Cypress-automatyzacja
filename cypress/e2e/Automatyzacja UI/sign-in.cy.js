describe("Visit the given page", () => {
    it("Visit the automationpractice with baseUrl from cypress.config.js", () => {
        cy.visit("/");
    })

    it("Open sign in page and use fixtures data to create account", () => {
        cy.contains("Sign in").click();
        cy.get("#email_create").scrollIntoView();
        cy.fixture("users").then(users =>{
            cy.get("#email_create").type(users[0].email);
            cy.get("#SubmitCreate").click();
        })
    })

    it("Should autofill e-mail with e-mail given beforehand", () => {
        cy.fixture("users").then(users => {
            cy.get("#email").should("have.value", users[0].email);
        })
    })

    it("Fill in Personal Information from fixtures", ()=>{
        cy.get("#id_gender2").click({timeout: 60000}); //?is there a way to wait till page load instead of waiting hard-coded 1 min?

        cy.fixture("users").then(users => {
            cy.get("#customer_firstname").type(users[0].name.split(' ')[0]); //it splits full name string based on ' ' seperator to array of words and gets the first word [0]
            cy.get("#customer_lastname").type(users[0].name.split(' ')[1]);

            //Random password
            const randId= () => Cypress._.random(0, 1e6); //function that generates random number (min, max)
            const randPassword = randId(); //call of that function
            cy.get("#passwd").type(randPassword);

            //Date options
            cy.get("#days").select("1"); //Dopisz birthday do users.json i split'nij to po kropce i wybierz dzien po czym wybierz to z users[0].birthday
        })
    })
    
})