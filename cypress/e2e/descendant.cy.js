/// <reference types="cypress" />

describe('Descendant', ()=> {


    it('Test', ()=>{

        cy.visit('https://www.amazon.com/')
        
        cy.xpath("//div[@id='pageContent']/descendant::h2[text()='Beauty picks']/parent::div/following-sibling::div/following-sibling::div/child::a[text()='Shop now']").click()


    })

})