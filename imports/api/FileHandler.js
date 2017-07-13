import { FilesCollection } from 'meteor/ostrio:files';
import './seminarioConectionC.js'

FileHandler={}


FileHandler.Images = new FilesCollection( {
    collectionName: 'Images',
    allowClientCode: false, // Disallow remove files from Client
    onBeforeUpload(file) 
    {
        // Allow upload files under 10MB, and only in png/jpg/jpeg formats
        if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) 
        {
            return true;
        }
        else
        {
            return 'Please upload image, with size equal or less than 10MB';
        }
    }
} );
FileHandler.Text = new FilesCollection( {
    collectionName: 'Text',
    allowClientCode: false, // Disallow remove files from Client
    onBeforeUpload(file) 
    {
        // Allow upload files under 10MB, and only in png/jpg/jpeg formats
        if (file.size <= 10485760 && /csv/i.test(file.extension)) 
        {
            return true;
        }
        else
        {
            return 'Please upload CSV, with size equal or less than 10MB';
        }
    }
} );
export default FileHandler; 

if (Meteor.isClient) {
    Meteor.subscribe('files.images.all');
    Meteor.subscribe('files.text.all');
}

if (Meteor.isServer) {
    Meteor.publish('files.images.all', function () 
    {
        return FileHandler.Images.find().cursor;
    });
    Meteor.publish('files.text.all', function () 
    {
        return FileHandler.Text.find().cursor;
    });
}