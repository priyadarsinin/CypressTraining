describe('Fixtureform2', () => {

    before(() => {
      cy.fixture('fixtures').then((store) => {
        cy.wrap(store).as('store'); // Store the fixture data using alias
      });
    });
  
    it('Fixture form2', function () {  // Use function() to bind 'this'
      // Visit the website
      cy.visit('https://mytestingthoughts.com/Sample/home.html');
      
      // Wait for the form fields to be visible (check the correct placeholders)
      cy.get("input[placeholder='First Name']").type(this.store.firstname);
      cy.get("input[placeholder='Last Name']").type(this.store.lastname);
      cy.get("input[placeholder='Username']").type(this.store.username);
      cy.get("input[placeholder='Password']").type(this.store.password);
      cy.get("input[placeholder='Confirm Password']").type(this.store.confirmpassword);
  
      // Corrected Email field
      cy.get("input[placeholder='E-Mail Address']", { timeout: 10000 })
        .should('be.visible')  // Make sure it's visible before interacting
        .type(this.store.email);
  
      // Enter the contact number
      cy.get("input[placeholder='(639)']").type(this.store.contactno);
    });
  
  });
  