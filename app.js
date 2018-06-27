const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs').argv;

notes = require('./notes.js');

var command = yargs._[0];
// console.log(process.argv);
// console.log(yargs.argv);

if (command === 'add') {
    notes.addNote(yargs.title,yargs.body)
} else if (command === 'list') {
    var listing  = notes.getAll();
    if(listing){
         for (let note of listing )
            console.log(note.title," : ",note.body)
        //console.log(listing)
    }
    else{
        console.log("List  Empty")
    }
} else if (command === 'remove') {
    notes.removeNote(yargs.title);
} else if (command === 'read') {
    listing = notes.getNote(yargs.title);
    //console.log(listing.title)
    if(listing)
        console.log(listing.title," : ",listing.body);
    else
        console.log("Listing Not Found");
}
else {
    console.log("Command Not Found");
}