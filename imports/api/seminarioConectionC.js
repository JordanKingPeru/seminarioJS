import { Meteor } from 'meteor/meteor';

if( Meteor.isServer )
{
    Future = require('fibers/future');
    MyConnection = DDP.connect("http://localhost:9002");
    Meteor.methods({
        train : function( fileId ) 
        {
            MyConnection.call( "train" , fileId , ( err , res )=>
                                         {
                                            console.log( "llegue ");
                                         }) ;
            response={};
            response.result="ok";
            return response;
        }
    });   
}