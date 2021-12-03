const notePreview = require('./notePreview')

const addNote = (noteContent, callback) => {
  data = { title: `${notePreview(noteContent.value)}`, content: `${noteContent.value}` }
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((_r) => {
        callback();
      });
  };
  
  module.exports = addNote;