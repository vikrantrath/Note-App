const fs = require('fs');
var notes = [];

var addNote = (title, body) => {
    //console.log("Adding Note with Title",title);
    
    var note = {
        title,
        body,
    }
    try{
    noteString = fs.readFileSync('notes-data.json')
    notes =JSON.parse(noteString);
    }
    catch(e){

    }
    var duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0){
    notes.push(note);
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
    }
};

var getAll = () => {
    console.log("getting all notes");
};

var removeNote = (title) => {
    console.log("Removing Note : ",title);
};

var getNote = (title) => {
    console.log("Getting a Note", title);
};
module.exports = {
    addNote: addNote, //in es6 only addNote will do since same name
    getAll,
    removeNote,
    getNote,
}

