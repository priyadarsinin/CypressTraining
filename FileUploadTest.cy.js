describe('File Upload Test', ()=>{
    it('File Upload Test', ()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")

        cy.get("#file-upload").attachFile("example.txt")
        cy.get("#file-submit").click()
        cy.get("div[class='example'] h3").contains("File Uploaded!")

    })
    it("file upload -Rename",()=>
        {
            cy.visit("https://the-internet.herokuapp.com/upload")
            cy.get("#file-upload").attachFile({filePath:"example.txt",fileName:"myfile.txt"})
            cy.get("#file-submit").click()
            cy.get("div[class='example'] h3").contains("File Uploaded!")
            cy.get('#uploaded-files').contains("myfile")
        })

        it("file upload -Drag and drop",()=>
            {
                cy.visit("https://the-internet.herokuapp.com/upload")
                cy.get("#drag-drop-upload").attachFile("example.txt",{subjectType:'drag-n-drop'})
                cy.get("div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span").contains("example.txt")
})

it("multiple file uploads",()=>
    {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#filesToUpload").attachFile(["example.txt","example2.txt"])
        cy.wait(5000)
        cy.get("ul#fileList>li").contains("example.txt")
        cy.get("ul#fileList>li").contains("example2.txt")                        
       
    })
})