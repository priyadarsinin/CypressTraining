describe('Drag and Drop', () => {
  it('Drag and drop', () => {
    cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-1.html");

    cy.get('#box1').pause();  // The test will pause here
    cy.get('#box1').should('be.visible');  // Ensure visibility before resuming

    // After you resume the test, wait for a specific action or condition
    cy.get('#dropBox').pause();  // Optionally, pause again at another action

    cy.get('#box1').drag('#dropBox', { force: true });
  });
});



