/// <reference types="cypress" />

describe('Screenshot Exmaple', () => {

    it('verify search item', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.xpath('//input[@name="username"]').type('Admin')

        cy.xpath('//input[@name="password"]').click()

        // cy.xpath('//p[@class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').click()

        cy.contains('Forgot your password?').click()

        cy.url().should('contain', 'requestPasswordResetCode')
        
        cy.screenshot()

    })

})