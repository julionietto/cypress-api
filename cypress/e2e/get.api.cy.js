/// <reference types="cypress"/>


describe('Buscar dispositivos', () => {

    const deviceId = '3'

    it('Buscar dispositivo especifico...', () => {
        cy.buscarDeviceEspecifico(deviceId)
            .then((response) => {
                expect(response.status).equal(200)
                expect(response.body).not.empty
                expect(response.body.data).not.empty
                expect(response.body.id).equal(deviceId)
                expect(response.body.name).contain('iPhone 12')
                expect(response.body.data['capacity GB']).equal(512)
        }) 
    })

    it('Buscar dispositivo inexistente', () => {
        const deviceIdIn = 'banana'
        cy.buscarDeviceEspecifico(deviceIdIn)
            .then((response) => {
                expect(response.status).equal(404)
                expect(response.body.error).equal(`Oject with id=${deviceIdIn} was not found.`)
        }) 
    })
})