
// const { should } = require('chai')
const data = require('../appURL.json')

describe('Verify Login Feature', () => {
    it('TC_01', () => {
  
      cy.visit(data.appURL_QA)

      cy.title().should('eq', 'Your store. Login')

      cy.get("input[type^='email']").clear()

      cy.get("input[type$='email']").type('admin@yourstore.com').should('have.value', 'admin@yourstore.com')

      cy.get("input*[type='password']").clear()

      cy.get("input[type='password']").type('admin')

      cy.get("input[type='checkbox']").click()
    
      cy.get('.button-1').click()

      cy.get("a[href='/logout']").click()

      cy.title().should('eq', 'Your store. Login')
   
    })
  })

    //  cy.title().should('eq', 'Your store. Login')

    //   cy.get("input[type='email']").clear()

    //   cy.get("input[type='email']").type('admin@yourstore.com')

    //   cy.get("input[type='password']").clear()

    //   cy.get("input[type='password']").type('admin')

    //   cy.get("input[type='checkbox']").click()
      
    //   cy.get('.button-1').click()


      //   cy.title().should('eq', 'OrangeHRM')

    //   cy.get("input[name='username']").clear().type('Admin').should('have.value', 'Admin')

    //   cy.get("input[name='password']").clear().type('admin123')
  
    //   cy.get("button[type='submit").click()

    //   cy.title().should('eq', 'OrangeHRM')