describe("Amazon test suite",()=>
    {
        it("sign up",()=>
        {
            cy.visit("https://www.amazon.in/")
            cy.get("#nav-link-accountList-nav-line-1").trigger('mouseover')
            cy.get('#nav-signin-tooltip > .nav-action-signin-button > .nav-action-inner').click()
            cy.get('#createAccountSubmit').click()
            cy.get('#ap_customer_name').type("Priya")
            cy.get('#ap_phone_number').type('8939093675')
            cy.get('#ap_password').type("ganesh@03")
        })
        it("sign in and search",()=>
        {
            cy.visit("https://www.amazon.in/")
            cy.get("#nav-link-accountList-nav-line-1").trigger('mouseover')
            cy.get('#nav-signin-tooltip > .nav-action-signin-button > .nav-action-inner').click()
            cy.get('#ap_email').type("priyan_che@yahoo.com")
            cy.get('.a-button-inner > #continue').click()
            cy.get('#ap_password').type("Ganesh@00")
            cy.get('#signInSubmit').click()
        
                
                // Type 'shoes for women' in the search input field
                cy.get('#twotabsearchtextbox')
                  .clear() // Clear any pre-existing text
                  .type('laptop'); // Type the search term
                
                // Submit the search by pressing 'Enter'
                cy.get('#twotabsearchtextbox').type('{enter}');
                
                cy.get('.sg-col-14-of-20 > .sg-col-inner > .a-size-base')
      .should('contain.text', 'laptop'); // Assert that the product name contains 'laptop'
      cy.get('#p_90\\/6741118031 > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon')
      .click(); // Click to filter by delivery by tomorrow

      // Uncheck the 'Get it by Tomorrow' filter (if already checked)
    cy.get('#p_90\\/6741118031 > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon')
    .click(); 
  // Wait for the page to reload after unchecking
  cy.wait(3000);
  
  // Click on the second checkbox (for a different filter, e.g., another delivery option)
  cy.get('#p_90\\/20912642031 > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon')
    .click(); // Click to apply a different filter
    
              })
        })
    