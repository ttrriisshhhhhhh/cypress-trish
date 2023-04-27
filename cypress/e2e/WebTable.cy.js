describe('Web Table', ()=> {


    before(function() {

        cy.visit('https://the-internet.herokuapp.com/tables')

    })


    it('Test 1', () => {

        cy.get('table#table1 > tbody > tr').should('have.length', 4)

        // cy.get('table#table1').find('tbody').find('tr').should('have.length', 4)

    })


})