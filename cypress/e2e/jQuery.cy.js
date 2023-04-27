describe('JQuery', () => {

    beforeEach( () => {

        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')

    })

    it('Test', () => {

        let txtEmail_JQuery = Cypress.$('#Email')

        if(txtEmail_JQuery.length) {

            cy.log(txtEmail_JQuery.attr('name'))

        }

    })

})