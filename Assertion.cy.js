describe("Assertion demo", function(){

    it("Implicit Assertion - URL", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include','orangehrmlive.com') 
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm')


         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
         cy.url().should('include','orangehrmlive.com') 
         .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         .and('not.contain','greenhrm') 


    })

    it("Implicit Assertion - title checking" , function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')
    })


    it("Implicit Assertion - element verification" , function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get('.orangehrm-login-branding > img').should("be.visible") 
        .and("exist") 

        cy.xpath("//a").should("have.length",'6') 

        cy.get("input[placeholder='Username']").type("Admin")
        .and("have.value","Admin")
    })

        it("explicit assertion", function(){
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            cy.get("input[placeholder='Username']").type("Admin")
            cy.get("input[placeholder='Password']").type("admin123")
            cy.get("button[type='submit']").click()


            let expectname= 'Dashboard' 
            
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').then( (x) =>{

                let actualname = x.text()

                expect(actualname).to.equal(expectname)

                assert.equal(actualname,expectname)

            })

        })


})