import React from 'react';
import ReactDOM from 'react-dom';
export default class HelloWorld extends React.Component
{
    handleRegister(e)
    {
        Router.go('/register');
    }
    handleLogin(e)
    {
        e.preventDefault();
        var user = $("#user").val();
        var pass = $("#pass").val();
        Meteor.loginWithPassword(user, pass, (err) =>
        {
            if (err)
            {
                console.log('error loging');
            }
            else
            {
                Router.go('/home');
            }
        });
    }
    render()
    {
        return ( <div>
                    < form onSubmit = { this.handleLogin } > 
                    < label > Usuario: < input type = "text" id = "user" placeholder = "Type User" / > < /label><br / >
                    < label > Password: < input type = "password" id = "pass" placeholder = "Type Password" / > < /label><br / >
                    < input type = "Submit" value = "Login" readOnly / > </ form ><br />
                    < button onClick = { this.handleRegister }> Register </button><br />
                 </div>);
    }
}