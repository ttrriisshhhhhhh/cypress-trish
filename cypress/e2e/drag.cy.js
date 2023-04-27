
describe('Drag and Drop', () => {

    it('Test', () => {

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

        cy.get('#box6').should('be.visible')
        cy.get('#box106').should('be.visible')
        cy.xpath('//div[@id="box5"]').should('be.visible')
        cy.xpath('//div[@id="box101"]').should('be.visible')

        cy.xpath('//div[@id="box5"]').drag('#box101', {force: true})
        cy.get('#box6').drag('#box106', {force: true})
    })
})