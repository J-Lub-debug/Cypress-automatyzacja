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
            cy.get("#days").select(users[0].birthday.split('.')[0]);
            cy.get("#months").select(users[0].birthday.split('.')[1]);
            cy.get("#years").select(users[0].birthday.split('.')[2]);

            //Checkboxes
            cy.get("#uniform-newsletter").click(); //.parent().check() won't work as it radio button but div
            cy.get("#uniform-optin").click();

        })
    })
    it("Fill in Address from fixtures", () => {
        cy.fixture("users").then(users => {
            cy.get("#firstname").type(users[0].name.split(' ')[0]);
            cy.get("#lastname").type(users[0].name.split(' ')[1]);
            cy.get("#company").type(users[0].company.name);
            cy.get("#address1").type(users[0].address.street + " " + users[0].address.city + " " + users[0].address.zipcode);
            cy.get("#address2").type(users[0].address.suite);
            cy.get("#city").type(users[0].address.city);
            cy.get("#id_state").select(21); //No European countries
            cy.get("#postcode").type(users[0].address.zipcode.split('-')[0]);
            cy.get("#phone_mobile").type(users[0].phone.split(' ')[0].split('-').join('')); //remove the right side, split on "-", join together

        })
    })
    
})