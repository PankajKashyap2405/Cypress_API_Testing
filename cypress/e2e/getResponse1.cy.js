
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.request('GET','https://www.bstackdemo.com/').then((response) =>{
    //Expecting the response status code to be 200
    expect(response.status).to.eq(200)
    expect(body.length).to.be.greaterThan(1)
      })
   })
})
