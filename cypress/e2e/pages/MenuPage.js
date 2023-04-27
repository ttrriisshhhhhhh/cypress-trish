class Menu {

    searchEmail = "input#SearchEmail"
    searchButton = "button#search-customers"
    fName = "input#SearchFirstName"
    lName = "input#SearchLastName"

    //Methods

    searchThis(searchPerson) {
        // cy.get(this.fName)
        //     .clear()
        //     .type('Victoria')
        
        // cy.get(this.lName)
        //     .clear()
        //     .type('Terces')

        cy.get(this.searchEmail)
            .clear()
            .type(searchPerson)

        cy.get(this.searchButton)
            .click()

    }

}

export default Menu;