
describe("DownloadFile",()=>
    {
        it("Download file",()=>
            {
                cy.visit("http://autopract.com/selenium/download.html")
                cy.get("#download").click()
                cy.readFile("cypress\\downloads\\dummy_file.txt").should("exist")
    })
    })