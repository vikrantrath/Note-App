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
    notes.getAll();
} else if (command === 'remove') {
    notes.removeNote(yargs.title);
} else if (command === 'read') {
    notes.getNote(yargs.title);
}
else {
    console.log("Command Not Found");
}