describe('Handling Mouse Evnts - Part 2', function()
{

      it('MouseOver', function()
    {
        cy.visit('https://the-internet.herokuapp.com/hovers')

        cy.get(':nth-child(3) > img').should('be.visible')
        cy.get(':nth-child(3) > img').trigger('mouseover')

        cy.get(':nth-child(4) > img').should('be.visible')
        cy.get(':nth-child(4) > img').trigger('mouseover')

        cy.get(':nth-child(5) > img').should('be.visible')
        cy.get(':nth-child(5) > img').trigger('mouseover')
        
    })
        

    

    it('Check and Uncheck', function()
      {
         cy.visit('https://the-internet.herokuapp.com/checkboxes')

         cy.get('[checked=""]').should('be.visible')
         cy.get('[checked=""]').not('[disabled]').uncheck() 

         cy.get('#checkboxes > :nth-child(1)').should('be.visible')
         cy.get('#checkboxes > :nth-child(1)').not('[disabled]').check() 
         


      })
    })
    