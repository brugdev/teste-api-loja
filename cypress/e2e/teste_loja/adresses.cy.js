// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import contrato from '../../contracts/address.contract'

describe('Testes de usuario', () => {
    let token
    before(() => {
        cy.token().then(tkn => { token = tkn })
    
    
});

it.only('Deve validar contrato de endereco', () => {
    cy.request('http://lojaebac.ebaconline.art.br/api/addAddress').then(response => {
        return contrato.validateAsync(response.body)
    })
});


it('Deve cadastrar um endereco', () => {
    cy.request({
        method: 'POST',
        url: 'http://lojaebac.ebaconline.art.br/api/addAddress',
        body: {
            "authorization": token,
            "name": faker.name.firstName,
            "phone": faker.phone,
            "address": faker.location.street,
            "city": faker.location.city,
            "state": faker.location.state,
            "zipCode": faker.location.zipCode
          }
    }).then(response => {
        expect(response.status).to.equal(200)//retorno status code
        expect(response.body.success).to.be.true
    })
});

it('Deve alterar um endereco', () => {
    cy.request({
        method: 'PUT',
        url: 'http://lojaebac.ebaconline.art.br/api/editAddress/6608bf414cd5a2e84942f9c7',
        body: {
            "authorization": token,
            "phone": faker.phone,
          }
    }).then(response => {
        expect(response.status).to.equal(200)//retorno status code
        expect(response.body.success).to.be.true
    })
});

it('Deve DELETAR um endereco', () => {
    cy.request({
        method: 'DELETE',
        url: 'http://lojaebac.ebaconline.art.br/api/deleteAddress/6608bf414cd5a2e84942f9c7',

    }).then(response => {
        expect(response.status).to.equal(200)//retorno status code
        expect(response.body.success).to.be.true
    })
});


});