import { Meteor } from 'meteor/meteor'; 
import { render } from 'react-dom';
import React from 'react';
import HelloWorld from '../ui/HelloWorld.js'
import UserPage from '../ui/UserPage.js'
import Login from '../ui/Login.js'
import Register from '../ui/Register.js'

Router.route('/',  {
	onBeforeAction: function()
	{
        var currentUser = Meteor.userId();
        if( currentUser )
        {
			Router.go('/home');
        } 
        else
        {
			Router.go('/login');
        }
    }
})

Router.route('/home',{
	onBeforeAction: function()
	{
        var currentUser = Meteor.userId();
        if(currentUser)
        {
			this.next();
        } 
        else
        {
			Router.go('/login');
        }
    },
    action: function()
    {
    	render(<UserPage/>, document.getElementById('MainWindow'));
    }
})

Router.route('/login',{
	onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser)
        {
			Router.go('/home');
        }
        else 
        {
			this.next();
		}
    },
    action: function()
    {
    	render(<Login/>, document.getElementById('MainWindow'));
    }
})

Router.route('/register',{
    onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser)
        {
            Router.go('/home');
        }
        else 
        {
            this.next();
        }
    },
    action: function()
    {
        render(<Register/>, document.getElementById('MainWindow'));
    }
})