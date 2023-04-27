/// <reference types="cypress" />

describe('Midterm Exam', () => {

    before( () => {

        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')

        cy.viewport("macbook-16")

    })

    it('Login', () => {

        // ================= VALIDATION ====================
        cy.title().should('eq', 'Your store. Login')

        // ================= INPUT EMAIL ====================
        cy.get("input[type^='email']").clear()

        // ================= EMAIL VALIDATION ====================
        cy.get("input[type$='email']").type('admin@yourstore.com').should('have.value', 'admin@yourstore.com')

        // ================= INPUT PASSWORD ==================== 
        cy.get("input*[type='password']").clear()

        cy.get("input[type='password']").type('admin')

        // ================= CHECKBOX VALIDATION AND CHECKING ====================
        cy.get("input[type='checkbox']").should('not.be.checked').check()
        
        // ================= LOGIN BUTTON ====================
        cy.get('.button-1').click()

        // ================= VALIDATION ====================
        cy.title().should('contain', 'Dashboard')

        // ================= CUSTOMERS TAB ====================
        cy.xpath("(//p[contains(text(),'Customers')])[1]").click()

        cy.xpath("(//p[contains(text(),'Customers')])[2]").click()

        cy.xpath("//*[@id='SearchEmail']").type('victoria_victoria@nopCommerce.com')

        cy.xpath("//*[@id='search-customers']").click()

        // ================= SCREENSHOT ====================
        cy.screenshot()

    })

})