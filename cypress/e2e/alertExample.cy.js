/// <reference types="cypress" />



describe('Alert Example', function() {

    it('Handle Alert', () => {

        cy.visit('http://www.uitestpractice.com/Students/Switchto')

        cy.viewport(1200, 1200)

        cy.get('button#alert').click()

        cy.get('button#confirm').click()
        cy.on('window:confirm', () => false)

        cy.window().then(function(p){
            cy.stub(p, "prompt").returns("Trish");
            cy.get('button[id=prompt]').click()
            cy.get('div[id=demo]').should('have.text','Hello Trish! How are you today?');
        })

    })

})