/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Xpath Example', () => {

    it('verify xpath', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.title().should('eq', 'OrangeHRM')

        cy.xpath('//input[@name="username"]').type('Admin')

        cy.xpath('//input[@name="password"]').type('admin123')

        cy.xpath('//button[@type="submit"]').click()

        cy.url().should('contain', 'dashboard')

        cy.xpath('//p[@class="oxd-userdropdown-name"]').click()

        // cy.xpath('//a[@href="/web/index.php/auth/logout"]').click()

        cy.xpath('//a[contains(text(),"Logout")]').click()
        
    })

})