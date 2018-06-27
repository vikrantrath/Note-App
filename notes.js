const fs = require('fs');
var notes = [];

var fetchnotes = () =>{
    try{
        noteString = fs.readFileSync('notes-data.json')
        return JSON.parse(noteString);
        }
        catch(e){
        return []
        }
};

var savenotes = (notes) =>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title, body) => {
    //console.log("Adding Note with Title",title);
    
    var note = {
        title,
        body,
    }
    notes = fetchnotes();
    var duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0){
    notes.push(note);
    savenotes(notes);
    }
};

var getAll = () => {
           return fetchnotes();
};

var removeNote = (title) => {
    try{
        notes =fetchnotes();
        b = notes.filter((note) => note.title !== title);//console.log(notes)
        }
        catch(e){
            b=null;
        }
        if(b)
            savenotes(b);
    
};

var getNote = (title) => {
    try{
        notes = fetchnotes();
        b = notes.filter((note) => note.title === title);
        //console.log(b)
        }
        catch(e){
            b=null;
        }
        return b[0]

};
module.exports = {
    addNote: addNote, //in es6 only addNote will do since same name
    getAll,
    removeNote,
    getNote,
}

