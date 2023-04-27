describe('Exercise', function() {
    
    it('Exercise - Testing', () => {

        cy.visit('http://only-testing-blog.blogspot.com/2013/11/new-test.html')

        cy.get('[name="fname"]').type('Trish')

        cy.get('[value="Car"]').check().should('be.checked')
        cy.get('[value="Bike"]').uncheck().should('not.be.checked')

        cy.get('[value="female"]').check().should('be.checked')
        cy.get('[value="male"]').should('not.be.checked')

        cy.get('[dir="ltr"] > :nth-child(5)').select('Singapore')

        cy.get('[dir="ltr"] > :nth-child(5)').select('Audi')

        cy.get('[dir="ltr"] > :nth-child(5)').select(4)

        cy.get('[name="FromLB"]').select(['Greece', 'Japan', 7], {force: true})

        cy.get('[value="->"]').click()


    }) 
})