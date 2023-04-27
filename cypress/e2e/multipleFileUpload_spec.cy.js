describe('File Upload Example', ()=>{


    it.only('file upload test 1', ()=>{


        cy.visit('https://the-internet.herokuapp.com/upload')




        //perform action on elemenet
        cy.get('#file-upload').attachFile('sample.txt')

        //perform action --- button
        cy.get('#file-submit').click()


        //validate file uploaded sucessfully



        cy.wait(3000)


        cy.get('h3').should('have.text', 'File Uploaded!')


        cy.get('#uploaded-files').then(  (ele) =>{


                let actualText = ele.text()
                cy.log(`File uploaded name: ${actualText}`)
                expect(actualText).to.contain('sample')


        }  )


    })


})