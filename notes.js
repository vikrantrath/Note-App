
var addNote = (title, body) => {
    console.log("Adding Note with Title",title);
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

