require('./login.scss');

import React from 'react';


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


      formElem.submit();
    }

    render(){
        return(
            <div className="login">
              <form className="login__data" action="#" method="GET" ref="loginForm">
                <p className="login__input"><label>User Name</label><input type="text" name="username"></input></p>
                <p className="login__input"><label>Password</label><input type="text" name="password"></input></p>
                <div className="login__submit" onClick={this.submit.bind(this)}>Login</div>
              </form>
                <p><a href="/signup">Sign Up</a></p>
            </div>
        );
    };
}
