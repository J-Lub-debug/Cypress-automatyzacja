describe("Test API remote action using inercepted token", () =>{
    it("Send POST request to add Faded Short Sleeve T-shirts to cart", () => {

        cy.fixture("token").then(tokens => {
            //Authorization is not passed trough headers, it might be stored in cookies?
            const cartPayload = {
                "payload": {
                    "controller": "cart",
                    "add": "1",
                    "ajax": "true",
                    "qty": 1,
                    "id_product": 1,
                    "token": "tokens.token"
                }
            }

            cy.request("POST", "http://automationpractice.com/index.php?rand=1663184348597", cartPayload);
            console.log(tokens.token);
            console.log(tokens.staticToken)
        })
    })
})