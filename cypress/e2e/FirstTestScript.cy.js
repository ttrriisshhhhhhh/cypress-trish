/// <reference types="cypress" />

const data = require('./appURL.json')

describe('Suite', () => {
  it('TC_01', () => {

    cy.visit(data.appURL_QA)

    cy.url().should('eql', data.appURL_QA)

    cy.title().should('eql', 'Your store. Login')

    cy.title().should('contain', 'Login')
    cy.title().should('not.contain', 'Admin')   //negative testing
    
  })
})