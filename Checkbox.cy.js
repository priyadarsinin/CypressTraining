describe("Check Boxes",function(){

    it("Single Selection", function(){

        cy.visit("https://demo.guru99.com/test/radio.html")

       

        cy.get("input#vfb-6-0").check().should("be.checked")
        cy.get("input#vfb-6-1").check().should("be.checked")
        cy.get("input#vfb-6-2").check().should("be.checked")

        cy.get("input#vfb-6-0").uncheck().should("not.be.checked")
        cy.get("input#vfb-6-1").uncheck().should("not.be.checked")
    })

    it("Multiple Selection",function(){

        

        cy.visit("https://demo.guru99.com/test/radio.html")
        cy.get('input[type="checkbox"]').check().should("be.checked")
    
        
        cy.get('input[type="checkbox"]').uncheck().should("not.be.checked")

    })

    it("Checking First and Last checkbox",function(){

        

        cy.visit("https://demo.guru99.com/test/radio.html")
        cy.get('input[type="checkbox"]').check().first().should("be.checked")
        cy.get('input[type="checkbox"]').check().last().should("be.checked")
    
        
        cy.get('input[type="checkbox"]').first().uncheck().should("not.be.checked")

    })

})
