describe('Dropdown Example', () => {

    it('dropdown select tag', () => {

        cy.visit('https://www.zoho.com/commerce/free-demo.html')

        cy.get('#zcf_address_country')
            .select('United States')
            .should('have.value', 'United States')

        cy.get('#zcf_users')
            .select('Selling offline')

    })


    it('dropdown part 2', () => {

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        cy.get('#select2-billing_country-container').click()

        cy.get('.select2-search__field').type('Italy{enter}')

        

    })

    it('dropdown part 3', () => {

        cy.visit('https://www.wikipedia.org/')

        let searchItem = 'Delhi'

        cy.get('#searchInput').type(searchItem)

        cy.get('h3.suggestion-title').should('have.length', 6)
        cy.get('h3.suggestion-title').should('have.length.greaterThan', 4)

        cy.get('h3.suggestion-title').contains('Delhi University').click()

        cy.title()
            .should('eq', 'Delhi University - Wikipedia')
            .should('contain', 'Delhi')
            .should('not.contain', 'Others')

        cy.url()
            .should('eq', 'https://en.wikipedia.org/wiki/Delhi_University')
            .should('contain', searchItem)
            .should('not.contain', 'Others')

    })

    it.only('see more', () => {

        cy.visit('https://www.amazon.com/')

        cy.get('a[class="a-link-normal see-more truncate-1line"]')
    })

})