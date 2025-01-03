// cypress/integration/login/login_spec.js


// If LoginPage.js is in the support folder
import LoginPage from '../support/LoginPage';




describe('Login Test', () => {
  it('should log in successfully with valid credentials', () => {
    const loginPage = new LoginPage();

    loginPage.visit();
    loginPage.fillUsername('Admin');
    loginPage.fillPassword('admin123');
    loginPage.submit();

    // Verify successful login
    cy.title().should('eq', 'OrangeHRM');  // Ensure the page title matches the expected one after login
  });
});
