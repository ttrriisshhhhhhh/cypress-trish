class Login {

    //Identification

    txtEmail = 'input#Email'
    txtPass = 'input#Password'


    //Methods

    enterEmail(emailID){

        cy.get(this.txtEmail).clear().type(emailID)
    }

    enterPassword(passID) {

        cy.get(this.txtPass).clear().type(passID)
    }

}

export default Login;