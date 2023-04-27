/// <reference types="cypress" />

describe('HRM App validation2', ()=>{


    
    after( ()=>{

        cy.log('------execute after-----')

    }  )


    it('verify login feature', ()=>{


        cy.log('-------------verify login feature test case------------------')


        let expectedTitle = "OrgangeHRM"
        let actualTitle = "organgeHRM"


        let a = 5
        let b = "99"
        console.log(a+b);

        expect(actualTitle).to.equal(expectedTitle)
        

    })


 

    before( ()=>{

        cy.log('------execute before-----')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.log('application launched sucessfully.')

    }  )





    

})