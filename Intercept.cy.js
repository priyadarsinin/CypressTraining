describe('Intercept Test Suite', () => {

    beforeEach(() => {
      cy.viewport(980, 700);
      cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/intercept");
    });
  
    // Test for Fetch GET Request - 3 Users
    it("SPY - INTERCEPT FETCH GET Request - 3 Users", () => {
      cy.intercept('GET', '/users*').as("users");
      cy.get("#loadThreeUsersFETCH").click();
      cy.wait("@users");
      cy.get("#xhrusers > tbody >tr").should("have.length", 1);
    });
  
    // Test for XHR POST Request (submit user data)
    it("SPY - INTERCEPT VIA SERVER-ROUTE XHR POST Request", () => {
      const user = {
        name: "priya",
        email: "priya@gmail.com"
      };
  
      cy.intercept('POST', '/users').as("users");
  
      cy.get("#xhrname").type(user.name);
      cy.get("#xhremail").type(user.email);
      cy.get("#xhrbtn").click();
      cy.wait("@users").then((xhr) => {
        expect(xhr.response.body.name).to.eql(user.name);
        expect(xhr.response.body.email).to.eql(user.email);
      });
  
      cy.get("#xhrspan").should("contain.text", `${user.name} - ${user.email}`);
    });
  
    // Test for Stubbed GET Request - 3 Users
    it("STUB - INTERCEPT VIA SERVER-ROUTE XHR GET Request - 3 Users", () => {
      cy.intercept('GET', '/users*', "fixtures:user.json").as("users");
      cy.get("#loadThreeUsersFETCH").click();
      cy.wait("@users");
      cy.get("#xhrusers > tbody >tr").should("have.length", 1);
    });
  
    // Test for Fetch GET Request - 3 Users with Query Params
    it("SPY - INTERCEPT FETCH GET Request - 3 Users", () => {
      cy.intercept({
        pathname: "/users",
        method: "GET",
        query: { _limit: '3' }
      }).as("users");
  
      cy.get("#loadThreeUsersFETCH").click();
      cy.wait("@users");
    });
  
    // Test for Stubbed Fetch GET Request - 3 Users
    it("STUB - INTERCEPT FETCH GET Request - 3 Users", () => {
      cy.intercept({
        pathname: "/users",
        method: "GET",
        query: { _limit: '3' }
      }, { fixture: "user.json" }).as("users");
  
      cy.get("#loadThreeUsersFETCH").click();
      cy.wait("@users");
    });
  
    // Test for Stubbed Fetch GET Request - 5 Users
    it("STUB - INTERCEPT FETCH GET Request - 5 Users", () => {
      cy.intercept({
        pathname: "/users",
        query: { _limit: '5' }
      }).as("users");
  
      cy.get("#loadFiveUsersFETCH").click();
      cy.wait("@users");
      cy.get("#fetchusers > tbody >tr").should("have.length", 5);
    });
  
    // Test for Fetch GET Request - Single User
    it("SPY - INTERCEPT FETCH GET Request - Single User", () => {
      // Fixing the intercept for the specific request
      cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users/10').as("users");  // Updated URL for specific user
  
      cy.get("#loadSpecificUserFETCH").click();
      cy.wait("@users");  // Wait for the intercept request
  
      cy.get("#fetchusers > tbody >tr").should("have.length", 1);  // Verify the table has only one user
    });
  
    // Test for Fetch POST Request (Submit new user)
    it("SPY - INTERCEPT FETCH POST Request", () => {
      const user = {
        name: "priya",
        email: "priya@gmail.com"
      };
  
      cy.intercept({
        pathname: "/users",
        method: "POST"
      }).as("users");
  
      cy.get("#fetchname").type(user.name);
      cy.get("#fetchemail").type(user.email);
      cy.get("#fetchbtn").click();
      cy.wait("@users").then((xhr) => {
        expect(xhr.response.body.name).to.eql(user.name);
        expect(xhr.response.body.email).to.eql(user.email);
      });
  
      cy.get("#fetchspan").should("contain.text", `${user.name} - ${user.email}`);
    });
  
  });
  