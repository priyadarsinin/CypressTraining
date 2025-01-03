
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

// in support folder inside LoginPage.js
// cypress/support/pages/LoginPage.js

class LoginPage {
    visit() {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
    }
  
    fillUsername(username) {
      cy.get('input[name="username"]').type(username);  // Replace with your username field's selector
    }
  
    fillPassword(password) {
      cy.get('input[name="password"]').type(password);  // Replace with your password field's selector
    }
  
    submit() {
      cy.get('button[type="submit"]').click();  // Replace with your login button's selector
    }
  }
  
  export default LoginPage;
