describe("Log in test", ()=> {

    it("Should go to log in page", () => {
        cy.visit("/?controller=authentication&back=my-account");
    })

    it("Intercept static token value using request with valid login data", () => {
        cy.fixture("registeredUsers").then(user => {
            const authorizationData = {
                "user": {
                    "email": user[0].email,
                    "passwd": user[0].password
                }
            }

            cy.request("POST", "http://automationpractice.com/index.php?controller=authentication", authorizationData)
            .its("body").then(response => {
                console.log(response); //token and static token are stored in html doc type in var static_token AND var token
                
                let staticTokenPosition = response.search("static_token"); //response is char[] array it finds index of first character of String
                let firstPosStaticToken = staticTokenPosition+16; //position of first char is "static_token = '".length()
                let staticToken = "";
                for(let i = 0; i < 32; i++){//staitc token has is 32 char long
                    staticToken = staticToken + response[firstPosStaticToken+i];
                } 
                console.log(staticToken);
                let tokenPosition = response.search(" token") + 1; //to differenciate from static_token added " " in front. Req + 1
                let firstPosToken = tokenPosition + 9;
                let token = "";
                for(let i = 0; i < 32; i++){//staitc token has is 32 char long
                    token = token + response[firstPosToken+i];
                } 
                console.log(token);
            })
        })
    })
})