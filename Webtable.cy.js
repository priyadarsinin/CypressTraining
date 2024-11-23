describe('MyTestSuite', () => {
    it('Table Test', () => {

        // Visit the W3Schools HTML tables page
        cy.visit('https://www.w3schools.com/html/html_tables.asp')

        // 1) Check value presence anywhere in the table
        cy.get("table[class='ws-table-all']").contains('td', 'Alfreds Futterkiste').should('be.visible')

        // 2) Check the value presence in specific row and column
        cy.get("table[class='ws-table-all'] tbody > tr:nth-child(2) > td:nth-child(3)")
            .contains('Germany').should('be.visible')

        // 3) Check value presence based on condition by iterating rows
        // Verify the company name 'Laughing Bacchus Winecellars' whose contact person is 'Yoshi Tannamuri'
        cy.get("table[class='ws-table-all'] > tbody > tr").each(($row) => {
            const contactPerson = $row.find("td:nth-child(2)").text(); // Assuming the contact person is in the 2nd column
            if (contactPerson.includes("Yoshi Tannamuri")) {
                const companyName = $row.find("td:nth-child(1)").text(); // Assuming the company name is in the 1st column
                expect(companyName).to.equal("Laughing Bacchus Winecellars");
            }
        });

    });
});
