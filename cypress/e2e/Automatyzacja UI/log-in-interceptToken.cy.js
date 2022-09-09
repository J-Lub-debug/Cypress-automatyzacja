describe("Log in test", ()=> {

    it("Should go to log in page", () => {
        cy.visit("/?controller=authentication&back=my-account");
    })

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
                let position = response.search("static_token"); //response is char[] array it find index of first character of String
                console.log(position);
                console.log(response[position+16]);
                let firstPos = position+16;
                let token = "";
                for(let i = 0; i < 32; i++){//staitc token has is 32 char long
                    token = token + response[firstPos+i];
                } 
                console.log(token);
            })
        })
    })
})