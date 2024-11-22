describe('Xpath Locators',function(){

    it('Find the no of products in women page',() =>{
    
        cy.visit("http://www.automationpractice.pl/index.php")

        //cy.xpath("//ul[@class='product_list grid row']/li").should('have.length',7) 

        cy.xpath("//ul[contains(@class, 'product_list') and contains(@class, 'grid')]/li", { timeout: 10000 })
      .should('have.length', 6);
    })
    })
    
