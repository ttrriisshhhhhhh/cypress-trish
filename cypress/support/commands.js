// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('clickOnElement', function(ele) { 
    
    cy.get('a').contains(ele).click()

})

Cypress.Commands.add('clickOnButton', function(ele) { 
    
    cy.get('button').contains(ele).click()

})

Cypress.Commands.add('wrapIframe', function(elem) { 
    
    return cy.get(elem)
            .its('0.contentDocument.body')
            .then(cy.wrap)

})

Cypress.Commands.add('verifyElementText', function(elem) {
    
    cy.get('td').contains(elem).should('exist')
})

Cypress.Commands.add('verifyElement', (selector, expectedText) => {
    
    cy.get(selector).then((ele) => {

        expect(ele.text()).to.equal(expectedText)

    })

})

/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import 'cypress-file-upload'

require('@4tw/cypress-drag-drop')

require('cypress-iframe')



