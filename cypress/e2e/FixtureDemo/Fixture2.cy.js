
describe('Fixture Example', function() {

    it('nop comm app - DDT', () => {

        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2FAdmin')

        cy.fixture('config.json').then( (x) =>  {

            cy.log(`enter email id: ${x.email}`)
            cy.get(`#Email`).clear().type(x.email)

            cy.log(`enter pass id: ${x.pass}`)
            cy.get(`.password`).clear().type(x.pass)

            cy.get('.button-1').click()


        })
    })

})