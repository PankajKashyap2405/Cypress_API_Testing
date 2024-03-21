describe("Delete method", () => {
    it("Delete method", () => {
        cy.request({
            method : 'DELETE',
            url     : "https://jsonplaceholder.typicode.com/posts/11",
            body    : {
                userId: 2,
                id: 11,
                title: "puting test",
                body: "This is a Cypress Test",
             
            }
        }).then(response =>{
            const res = response
            assert.equal(res.status, 200)
            assert.notEqual(res.body.title, "puting test")
            assert.notEqual(res.body.id, 11)
            assert.notEqual(res.body.body, "This is a Cypress Test")
            assert.notEqual(res.body.new, "patch test") 
        })
    })
})