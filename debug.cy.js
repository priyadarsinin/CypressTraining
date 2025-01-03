/// <reference types="Cypress" />  

describe('Debug or stop?', () => {

    it('Debug', function () {
      // Navigate to the page
      cy.visit("https://automationintesting.online/#/");
  
      // Assert the button text to ensure the page is loaded
      cy.get('.col-2 > .btn').should('have.text', 'Let me hack!');
  
      // Input Name
      cy.get('#name').clear().type('Priya Darsini');
      
      // Use `cy.wait()` wisely or, better, use assertions to ensure the field is ready
      cy.get('#name').should('have.value', 'Priya Darsini');  // Validation
  
      // Input Email
      cy.get('#email').clear().type('my email');
      cy.get('#email').should('have.value', 'my email');  // Validation
  
      // Input Phone
      cy.get('#phone').clear().type('973434');
      cy.get('#phone').should('have.value', '973434');  // Validation
  
      // Input Subject
      cy.get('#subject').clear().type('Test program for debugging using breakpoints in cypress');
      cy.get('#subject').should('have.value', 'Test program for debugging using breakpoints in cypress');  // Validation
  
      // Input Description
      cy.get('#description').clear().type('This is a test for debugging in cypress using breakpoints');
      cy.get('#description').should('have.value', 'This is a test for debugging in cypress using breakpoints');  // Validation
  
      // If you want to pause and inspect the state of the page
      cy.pause(); // Pauses the test, allowing manual inspection in the Cypress Test Runner
  
      // Submit the form
      cy.get('#submitContact').click();
      
      // Assertion after clicking the submit button
      cy.get('.contact > :nth-child(2) > div > :nth-child(2)')
        .should('be.visible'); // Ensures the expected element becomes visible after the submission
  
    });
  
  });
  