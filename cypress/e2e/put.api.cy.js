/// <reference types="cypress"/>

describe('Update dispositivo', () => {
    it('Alterar dispositivo', () => {

        const body_cadastro = {
            "name": "Apple iPhone 15 Pro",
            "data": {
                "color": "Cloudy White",
                "capacity GB": 128,
                "year": 2024
            }
        }

        const body_put = {
            "name": "Apple iPhone 16 Pro",
            "data": {
                "color": "Cloudy Black",
                "capacity GB": 256,
                "year": 2025
            }
        }

        cy.adicionarDevice(body_cadastro)
            .then((response) => {
                expect(response.status).equal(200)
                expect(response.body.name).equal('Apple iPhone 15 Pro')

            cy.alterarDevice(response.body.id, body_put)    
                .then((response_put) => {
                    expect(response_put.status).equal(200)
                    expect(response_put.body.name).equal('Apple iPhone 16 Pro')
            })
        }) 
    })
})