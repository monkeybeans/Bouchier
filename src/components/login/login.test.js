var expect = require('chai').expect;
//var sinon = require('sinon');

describe('Login', function(){
  const Login = require('./Login.jsx');

  it('Validates empty forms to false', function(){
    const res = Login._validateForm({ apa: '', banan: ''});

    expect(res).to.be.true;
  });
});
