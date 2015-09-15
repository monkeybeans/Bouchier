module.exports = {
  'Login with valid user' : function (browser) {
    browser
      .url('localhost:8080')
      .waitForElementVisible('body', 1000)
      .setValue('#field_username', 'apan')
      .setValue('#field_password', 'apansson')
      //.waitForElementVisible('button[name=btnG]', 1000)
      .click('#button_login')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};
