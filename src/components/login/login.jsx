require('./login.scss');

import React from 'react';


export default class Login extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="login">
                <label className="login__row">User Name<input type="text"></input></label>
                <label className="login__row">Password<input type="text"></input></label>
                <a href="/signup">Sign Up</a>
            </div>
        );
    };
}
