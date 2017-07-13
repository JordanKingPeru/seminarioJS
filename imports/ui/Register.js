import React from 'react';
import ReactDOM from 'react-dom';
export default class RegisterPage extends React.Component
{
    handleRegister(e)
    {
        e.preventDefault();
        var user = $("#user").val();
        var pass = $("#pass").val();
        var options = {};
        options.username = user;
        options.password = pass;
        //options.email = 'kprui11@gmail.com';
        Accounts.createUser(options, (err) =>
        {
            if (err)
            {
                console.log('error creating user');
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
                    < form onSubmit = { this.handleRegister } > 
                    < label > Usuario: < input type = "text" id = "user" placeholder = "Type User" / > < /label><br / >
                    < label > Password: < input type = "password" id = "pass" placeholder = "Type Password" / > < /label><br / >
                    < input type = "Submit" value = "Create Account" readOnly / > </ form ><br />
                 </div>);
    }
}