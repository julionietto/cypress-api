/// <reference types="cypress"/>

describe('Teste', () => {
    it('Teste', () => {
        const id_invalido = 123456
        cy.deletarDevice(id_invalido)
            .then((response_delete) => {
                expect(response_delete.status).equal(404)
                expect(response_delete.body.error).equal(`Object with id = ${id_invalido} doesn't exist.`)
        })
    })
})