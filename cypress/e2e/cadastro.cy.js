describe('Be The Hero', () => {
    it('Cadastro', () => {
        cy.visit('https://bethehero-frontend.netlify.app/register')

        cy.get('[placeholder="Nome da ONG"]').type('Guara')
        cy.get('[placeholder="E-mail"]').type('nome@gmail.com')
        cy.get('[placeholder="Whatsapp"]').type(3298546321)
        cy.get('[placeholder="Cidade"]').type('Guaranje')
        cy.get('[placeholder="UF"]').type('ES')

        cy.get('.button').click();



    });
});