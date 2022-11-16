// Verifiy that amount of data returned is valid 
// with request parameter

// Postman automation test script
pm.test("Check the items in array ", () => {
    let jsonData = pm.response.json()
    pm.expect(jsonData.length).to.equal(10)
})