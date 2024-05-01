/// <reference types="cypress"/>

describe ('Funcionalidade: login',() =>{
    it ('Dever fazer login com sucesso',()=>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type ('marco@teste.com') 
        cy.get('#password').type('6725')
        cy.get('.woocommerce-form > .button').click()

        cy.get('#main > .woocommerce').should('contain','Olá, marco (não é marco? Sair)')
    })
})