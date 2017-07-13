import React from 'react';
import FileHandler from '../api/FileHandler.js'
import VisualizationFrame from './VisualizationFrame.js'
export default class UserPage extends React.Component
{
    handleUploadToTrainFiles(e)
    {
        e.preventDefault();
        var currentUser = Meteor.userId();
        if (!currentUser)
        {
            this.error.set('Must be Logged');
            return false;
        }
        files = e.currentTarget.files;
        if (!files.length)
        {
            this.error.set('Please select a file to upload');
            return false;
        }
        sendToServer = function( file , index )
        {
            const upload = FileHandler.Text.insert(
            {
                file: e.currentTarget.files[0],
                streams: 'dynamic',
                chunkSize: 'dynamic'
            }, false);
            upload.on('start', function()
            {
                console.log('send '.concat(files[index]));
            });
            upload.on('end', function( error , fileObj)
            {
                if ( error )
                {
                    console.log('error for file '.concat( fileObj.name ).concat( error ));
                }
                else
                {
                    console.log('succesful uploaded '.concat(fileObj.name));
                    Meteor.call( "train" , fileObj._id ,(err,res)=>
                    {
                        if( err )
                        {
                            console.log( err );
                        }
                        else
                        {
                            console.log( res );
                        }
                    });
                }
            });
            upload.start();
        }
        Array.prototype.forEach.call(files, sendToServer);
    }
    handleUploadToPredictFiles( e )
    {
        e.preventDefault();
        var currentUser = Meteor.userId();
        if (!currentUser)
        {
            this.error.set('Must be Logged');
            return false;
        }
        files = e.currentTarget.files;
        if (!files.length)
        {
            this.error.set('Please select a file to upload');
            return false;
        }
        sendToServer = function( file , index )
        {
            const upload = FileHandler.Text.insert(
            {
                file: e.currentTarget.files[0],
                streams: 'dynamic',
                chunkSize: 'dynamic'
            }, false);
            upload.on('start', function()
            {
                console.log('send '.concat(files[index]));
            });
            upload.on('end', function( error, fileObj )
            {
                if (error)
                {
                    console.log('error for file '.concat(fileObj.name).concat(error));
                }
                else
                {
                    console.log('succesful uploaded '.concat(fileObj.name));
                    //Meteor.call("uploadToPredict", fileObj._id );
                }
            });
            upload.start();
        }
        Array.prototype.forEach.call(files, sendToServer);
    }
    handleLogout(e)
    {
        e.preventDefault();
        Meteor.logout( ( error )=>{
            if( error )
            {
                console.log( error );
            }
            else
            {
                Router.go('/home');
            }
        });
    }
    render()
    {
        return (< div width="100%" > 
                    < div style={{float:"left" , width:"30%"}} >
                        < h1 > UserPage < /h1> <br />
                        < input id = "fileInput" type = "file" onChange = { this.handleUploadToTrainFiles } accept=".csv"/> <br />
                        < input id = "fileInput" type = "file" onChange = { this.handleUploadToPredictFiles } accept=".csv"/> <br />
                        < button onClick = { this.handleLogout } >Logout </button > <br /> 
                    </ div >
                    < div style={{float:"right" , width:"60%"}}>
                        < VisualizationFrame />
                    </ div >
                </ div > );
    }
}