describe('SKIP Method',() => {
    it.skip('Get Method 1', () => {
        cy.request("GET", "https://jsonplaceholder.typicode.com/posts/11")
        .then(response => {
            const res = response.status
            expect(res).to.eq(200)
        })
    })

    it('Get Method 2',() =>{
        cy.request({
            method : 'GET',
            url     : "https://jsonplaceholder.typicode.com/posts/11"
        })
        .its('status')
        .should('equal', 200)
    })

    it('Get Method 3',() =>{
        cy.request({
            method : 'GET',
            url     : "https://jsonplaceholder.typicode.com/posts/11"
        }).then(response =>{
            const res = response
            assert.equal(res.status, 200)
            assert.equal(res.body.id, 11)
            assert.equal(res.body.title, "et ea vero quia laudantium autem")
            assert.equal(res.body.body, "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi")
        })
    })

    it.skip('Get Method 3', () => {
        cy.request("GET", "https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            const res = response
            expect(res.status).to.eq(200)
            console.log(res.id)
        })
    })
})