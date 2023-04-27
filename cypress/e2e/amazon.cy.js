
describe('Amazon', () => {

    before( function() {

        cy.fixture('appData.json').then( function(deets) {

            this.nopComm = deets;

        })
    })

    it('Fixture Example', function() {
        
        cy.visit(this.nopComm.nopComm)
        
    });

    // it('Verify Search Functionality', () => {

    //     cy.visit('https://www.amazon.com/');
    //     cy.get('input#twotabsearchtextbox').clear().type('iphone')
    //     cy.get('input#nav-search-submit-button').click()
    //     cy.title().should('contain', 'iphone')

    // })
})