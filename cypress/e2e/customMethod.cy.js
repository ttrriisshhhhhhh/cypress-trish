/// <reference types="cypress" />

describe('Custom Method', () => {

    it('Test', () => {

        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        
        cy.clickOnButton('Log in')

        cy.clickOnButton('Year')

        cy.clickOnButton('Month')

        cy.clickOnButton('Week')

        cy.clickOnElement('View All Orders')

    })

})