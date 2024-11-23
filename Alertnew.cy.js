Alert
describe("Handling Alerts", function(){

    it('Simple Alerts', function(){
    
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()
    
        cy.on("window:alert",(t) =>{
    
            expect(t).to.contains("I am a JS Alert")
    
        })
        cy.wait(2000)
        cy.get("#result").should("have.text","You successfully clicked an alert")
    
    })
    
        it('Confirmation Alerts -Ok ', function(){
    
            cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
            cy.get("button[onclick='jsConfirm()']").click()
    
            cy.on("window:Confirm",(t) => {
                expect.to.contains("I am a JS Alert")
            })
            cy.wait(2000)
            cy.get("#result").should("have.text","You clicked: Ok")
    
        })
        
        it('Confirmation Alerts - Cancel  ', function(){
    
            cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
            cy.get("button[onclick='jsConfirm()']").click()    
            cy.on("window:Confirm",(t) => {
                expect.to.contains("I am a JS Alert")
            })
            cy.wait(2000)
            cy.on('window:confirm', () => false)
            cy.get("#result").should("have.text","You clicked: Cancel")
    
        })
    
        it("Prompt Alerts", function(){
    
            cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
           
            cy.window().then((win) => {
                cy.stub(win,"prompt").returns("Cypress")
                
            })
            cy.get("button[onclick='jsPrompt()']").click()
    
    
            cy.get("#result").should("have.text","You entered: Cypress")
        })
    
    })