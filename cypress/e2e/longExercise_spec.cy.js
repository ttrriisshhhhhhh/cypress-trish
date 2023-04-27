import Login from './pages/LoginPage.js'
import Menu from './pages/MenuPage.js'

const data = require('./appURL.json')

describe('Verify NOP Comm Login', ()=>{

    //hooks
    beforeEach(()=>{

        cy.log(`Executing the Before each`)
        cy.visit(data.appURL_QA)
        cy.viewport('macbook-16')

    })

    it.skip('verifyLogin and Logout with valid user credenatils - Page Object Model', ()=>{

        const lp = new Login();

        lp.enterEmail('admin@yourstore.com')
        lp.enterPassword('admin')

        cy.title().should('eq', 'Your store. Login')

        cy.get("input[type='checkbox']").should('not.be.checked').check()

        cy.get('.button-1').click()

        //validation
        cy.title().should('eq', 'Dashboard / nopCommerce administration')

        cy.xpath("(//p[contains(text(),'Customers')])[1]").click()
        cy.xpath("(//p[contains(text(),'Customers')])[2]").click()

    })

    it('Go to customers page and validate search results', ()=> {

        const lp = new Login();

        lp.enterEmail('admin@yourstore.com')
        lp.enterPassword('admin')

        cy.title().should('eq', 'Your store. Login')

        cy.get("input[type='checkbox']").should('not.be.checked').check()

        cy.get('.button-1').click()

        //validation
        cy.title().should('eq', 'Dashboard / nopCommerce administration')

        cy.xpath("(//p[contains(text(),'Customers')])[1]").click()
        cy.xpath("(//p[contains(text(),'Customers')])[2]").click()

        const mp = new Menu();

        mp.searchThis('victoria_victoria@nopCommerce.com')

        cy.verifyElementText('victoria_victoria@nopCommerce.com')

    })

})