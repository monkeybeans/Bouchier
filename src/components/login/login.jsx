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

      if ( this._validateForm(input) ){
        formElem.submit();
      }
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
              <form className="login__data" action="#" method="GET" ref="loginForm">
                <p className="login__input"><label>User Name</label><input id="field_username" type="text" name="username"></input></p>
                <p className="login__input"><label>Password</label><input id="field_password" type="text" name="password"></input></p>
                <div id="button_login" className="login__submit" onClick={this.submit.bind(this)}>Login</div>
              </form>
                <p><a href="/signup">Sign Up</a></p>
            </div>
        );
    };
}
