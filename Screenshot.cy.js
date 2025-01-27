describe("Capture screenshot",()=>
    {
        it("screenshot",()=>
        {
            cy.visit("https://www.qaoncloud.com/")
            cy.screenshot("home page")
            cy.wait(5000)
            cy.get(".elementor-button-text").screenshot("screenshot")
        })
        
                }); 
              
    
        