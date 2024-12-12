describe('Fixture', () =>{
    let userdata;
    before(function() {
        cy.fixture("orangehrm.json").then(function(data){
           userdata=data
        })

    })
    it('Demo',function(){

        cy.visit("https://www.orangehrm.com/en/book-a-free-demo")
        cy.get("#Form_getForm_FullName").type(userdata.fullname)  
        cy.get("#Form_getForm_Contact").type(userdata.phonenumber)
        cy.get('#Form_getForm_Email').type(userdata.email) 
        cy.get("#Form_getForm_CompanyName").type(userdata.companyname)  
        cy.get("#Form_getForm_Country").select(userdata.country).should('have.value','India') 
        cy.get('#Form_getForm_NoOfEmployees').select(userdata.totalemployees)
        cy.wait(8000)
        


    })


})