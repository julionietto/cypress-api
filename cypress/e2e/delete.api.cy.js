/// <reference types="cypress"/>

describe('Deletar dispositivos', () => {
    it('Deletar dispositivo', () => {

        const body = {
            "name": "Apple iPhone 15 Pro",
            "data": {
                "color": "Cloudy White",
                "capacity GB": 128,
                "year": 2024
            }
        }

        cy.adicionarDevice(body)
            .then((response) => {
                expect(response.status).equal(200)

            cy.deletarDevice(response.body.id)    
                .then((response_delete) => {
                    expect(response_delete.status).equal(200)
                    expect(response_delete.body.message).equal(`Object with id = ${response.body.id} has been deleted.`)
            })
        }) 
    })

    it('Deletar um dispositivo que não existe', () => {
        const id_invalido = 123456
        cy.deletarDevice(id_invalido)
            .then((response_delete) => {
                expect(response_delete.status).equal(404)
                expect(response_delete.body.error).equal(`Object with id = ${id_invalido} doesn't exist.`)
        })
    })
})