describe("Choosing given element by using different methods", () => {
    it("Choose current prices from Best Sellers", () => {
        cy.visit("/");
        cy.contains(".blockbestsellers","Best Sellers").click(); //cy.contains(selector, content, options)
        cy.get(".price.product-price").invoke("text").then((text) =>{ //(.<classname>.<classname>)
            
        });
        
    })
    it("Hover on Women tab", () => {
        //cy.get('a[title="Women"]').trigger("focus"); //triger Event on DOM element
        cy.get('a[title="Women"]').focus();
    })

    it("Scroll into 3th Printed dress img", () => {
        cy.get('.product_img_link[title="Printed Dress"]').eq(2).scrollIntoView();
    })
    it("Type in search box and press Enter", () => {
        cy.get("#search_query_top").type("Summer{enter}");
    })
    it("Type in search box and press Enter", () => {
        cy.get("#search_query_top").type("Summer{enter}");
    })
    it("Sign in to newsletter and check if alert message appears on Top of the page and in the input field", () => {
        cy.get("#newsletter-input").type("test123@gmail.com{enter}")
        cy.get("#newsletter-input").should("have.value", "This email address is already registered."); //Input alert
        cy.get(".alert.alert-danger").should("contain", " Newsletter : This email address is already registered."); //Top alert
    })

})