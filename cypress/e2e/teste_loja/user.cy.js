// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import contrato from '../../contracts/user.contract'


describe('Testes de usuario', () => {
    let token
    before(() => {
       cy.token().then(tkn => { token = tkn })
    
    
});

it('Deve validar contrato de usuario', () => {
    cy.request('http://lojaebac.ebaconline.art.br/public/addUser').then(response => {
        return contrato.validateAsync(response.body)
    })
});



it('Deve cadastrar usuario', () => {
    cy.request({
        method: 'POST',
        url: 'http://lojaebac.ebaconline.art.br/public/addUser',
        body: {
            "email": faker.internet.email(),
            "phone": "345555555",
            "password": "25250406",
            "firstName": "Teste",
            "lastName": "Testando"
        }
    }).then(response => {
        expect(response.status).to.equal(200)//retorno status code
        expect(response.body.success).to.be.true
    })
});


it.only('Deve alterar o usuario', () => {
    cy.request({
        method: 'PUT',
        url: 'http://lojaebac.ebaconline.art.br/api/editUser/6608bf414cd5a2e84942f9c7',
        body: {

            "firstName": faker.internet.displayName,

        },
        headers: { authorization: token }
    }).then(response => {
        expect(response.status).to.equal(200)//retorno status code
        expect(response.body.success).to.be.true
    })
});


it('Deve Deletar o usuario', () => {
    cy.request({
        method: 'DELETE',
        url: 'http://lojaebac.ebaconline.art.br//api/deleteUser/6608bf414cd5a2e84942f9c7',
        headers: { authorization: token }
    }).then(response => {
        expect(response.status).to.equal(200)//retorno status code
        expect(response.body.success).to.be.true
    })
});


});

















        


