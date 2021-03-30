module.exports = {
    'Header Test'(browser) {
        browser
        .url('http://localhost:3000')
        .waitForElementVisible('body')
        .waitForElementVisible('p')
        .assert.containsText("h1", "Castle in the Sky (1986)")
        .end
    }
}