describe('Hooks', function()
{

    before(function() {
        cy.log('***************** This is SETUP block**********')
    })

    beforeEach(function(){
        cy.log('***************** This is LOGIN block**********')
    })

    after(function() {
        cy.log('***************** This is Tear Down block**********')
    })

    afterEach(function() {
        cy.log('***************** This is LOGOUt block**********')
    })
it('searching', function(){

    cy.log('***************** This is searching test **********')
})
it('advance searching', function(){
    
    cy.log('***************** This is advance searching test **********')
})
it('listing products', function(){
   
    cy.log('***************** This is listing product test **********')
})

})