describe('Handling frames', () => {  // This is a test suite
    it('Approach', function() {  // This is one of the test cases
      cy.visit("https://ui.vision/demo/webtest/frames/");
  
      // Access the <frame> element (instead of <iframe>) and ensure it's visible
      cy.get("frame[src='frame_1.html']", { timeout: 10000 })
        .should('be.visible')  // Ensure the frame is visible
        .its('0.contentDocument.body')  // Access the contentDocument of the frame
        .should('be.visible')  // Ensure the frame content is visible
        .then(cy.wrap)  // Wrap the body of the frame for further actions
        .find("input[name='mytext1']")  // Find the input field by its name attribute
        .type("welcome");  // Type "welcome" into the input field
    });
  });
  
  
  