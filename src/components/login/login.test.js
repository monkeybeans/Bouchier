var React          = require('react')
var ReactAddons    = require('react/addons') // You also need to require the addons
var ReactTestUtils = React.addons.TestUtils  // <- YEAH!

var expect = require('chai').expect;
//var sinon = require('sinon');

describe('Login', function(){
  let Login;
  let login;

  beforeEach(function(){
    Login = require('./login');
    login = ReactTestUtils.renderIntoDocument(React.createElement(Login));
  });

  afterEach(function(){
    Login = null;
    login = null;
  });

  it('Validates empty forms to false', function(){
    const res = login._validateForm({ apa: '', banan: ''});

    expect(res).to.be.false;
  });

  it('Validates null forms to false', function(){
    const res = login._validateForm(null);

    expect(res).to.be.false;
  });

  it('Validates undefined forms to false', function(){
    const res = login._validateForm(undefined);

    expect(res).to.be.false;
  });

  it('Validates filled forms to true', function(){
    const res = login._validateForm({ apa: 'oahah', banan: 'mmmmh'});

    expect(res).to.be.true;
  });
});
