describe('suite name', ()=>{
    
    it('test1', ()=>{
        cy.visit("https://www.orangehrm.com/")
        cy.title().should('eq', 'OrangeHRM')
    })

})