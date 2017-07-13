import { Meteor } from 'meteor/meteor';

if( Meteor.isServer )
{
    //import Future from 'fibers/future';
    MyConnection = DDP.connect("http://localhost:9002",( err , res )=>
                                            {
                                                console.log( "llegue  asd ");
                                            }) ;
    //conections = new Meteor.Collection('conections', MyConnection); 
    Meteor.methods({
        train : function( fileId ) 
        {
            MyConnection.call( "train" , fileId ) ;
            response={};
            response.result = "ok";
            return response;
        }
    });  
}