/// <reference types="cypress"/>

describe('Cadastrar dispositivos', () => {

    const body = {
        "name": "Apple iPhone 15 Pro",
        "data": {
            "color": "Cloudy White",
            "capacity GB": 128,
            "year": 2024
        }
    }

    it('Cadastrar novo dispositivo', () => {
        cy.adicionarDevice(body)
            .then((response) => {
                expect(response.status).equal(200)
                expect(response.body).not.empty
                expect(response.body.data).not.empty
                expect(response.body.id).not.empty
                expect(response.body.name).contain('iPhone 15')
                expect(response.body.data['capacity GB']).equal(128)
        }) 
    })

    it('Cadastrar novo dispositivo sem dados', () => {
        cy.adicionarDevice('')
            .then((response) => {
                expect(response.status).equal(400)
                expect(response.body.error).equal('400 Bad Request. If you are trying to create or update the data, potential issue is that you are sending incorrect body json or it is missing at all.')
        }) 
    })

})