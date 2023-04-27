describe('iFrame Example', ()=> {

    it('test', ()=> {

        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.frameLoaded('#mce_0_ifr')

        cy.iframe('#mce_0_ifr').clear().type('Hello world!').type('{ctrl}A')

        cy.get('button[title="Bold"]').click()

        cy.get('button[title="Italic"]').click()

        // const my_iframe = cy.wrapIframe('#mce_0_ifr')

        // my_iframe.clear().type('Welcome to Rajesh class').type(' {ctrl}A')

    })

})