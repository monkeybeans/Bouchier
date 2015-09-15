require('./login.scss');

import React from 'react';
import _ from 'lodash';


export default class Login extends React.Component {
    constructor(props){
        super(props);
    }

    submit(){
      const formElem = React.findDOMNode(this.refs.loginForm);
      const inputElems = formElem.querySelectorAll('input');
      let input = {};

      Array.prototype.forEach.call(inputElems, (elem) => {
        input[elem.getAttribute('name')] = elem.value;
      });

      var onReady = () => {


      };

      if ( this._validateForm(input) ){
        this._sendRequest('login.html', function(response){
          document.getElementById('login-authenticated').setAttribute('src', '/assets/start.js');
          console.info('login response: ', response);
        });
      }
    }

    _sendRequest(url, onSuccess){
      let httpRequest = new XMLHttpRequest();
      let onReady = () => {
        if (httpRequest.readyState === 4) {
          if ( httpRequest.status === 200 ) {
            onSuccess(httpRequest.responseText);
          } else {
            console.error(`Response from ${url} failed.`);
          }
        }
      };

      httpRequest.onreadystatechange = onReady;
      httpRequest.open('GET', url);
      httpRequest.send();
    }

    _validateForm(input){
      if ( input == null ) { return false; }
      if ( Object.keys(input).length === 0 ) { return false; }

      for (let prop in input) {
        if ( !input[prop] && input[prop] !== 0) {
          return false;
        }
      };

      return true;
    }

    render(){
        return(
            <div className="login">
              <form className="login__data" action="login.html" method="POST" ref="loginForm">
                <p className="login__input"><label>User Name</label><input id="field_username" type="text" name="username"></input></p>
                <p className="login__input"><label>Password</label><input id="field_password" type="text" name="password"></input></p>
                <div id="button_login" className="login__submit" onClick={this.submit.bind(this)}>Login</div>
              </form>
                <p><a href="/signup">Sign Up</a></p>
            </div>
        );
    };
}
