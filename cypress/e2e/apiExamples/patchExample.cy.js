describe("Patch Method", () => {
    it("Patch Method", () => {
        cy.request({
            method : "PATCH",
            url     : "https://jsonplaceholder.typicode.com/posts/11",
            body    : {
                userId: 2,
                id: 11,
                title: "puting test",
                body: "This is a Cypress Test",
                new : "patch test"
            }
        }).then(response =>{
            const res = response
            assert.equal(res.status, 200)
            assert.equal(res.body.id, 11)
            assert.equal(res.body.title, "puting test")
            assert.equal(res.body.body, "This is a Cypress Test")
            assert.equal(res.body.new, "patch test") 
        })
    })
})