(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notePreview.js
  var require_notePreview = __commonJS({
    "notePreview.js"(exports, module) {
      var preview = (note) => {
        if (note.length <= 20) {
          return `${note}`;
        } else {
          return `${note.substring(0, 20)}`;
        }
      };
      module.exports = preview;
    }
  });

  // addNote.js
  var require_addNote = __commonJS({
    "addNote.js"(exports, module) {
      var notePreview = require_notePreview();
      var addNote2 = (noteContent2, callback) => {
        data = { title: `${notePreview(noteContent2.value)}`, content: `${noteContent2.value}` };
        fetch("http://localhost:3000/notes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        }).then((response) => response.json()).then((_r) => {
          callback();
        });
      };
      module.exports = addNote2;
    }
  });

  // getNotes.js
  var require_getNotes = __commonJS({
    "getNotes.js"(exports, module) {
      var getNotes2 = (follow_up) => {
        fetch("http://localhost:3000/notes").then((response) => {
          response.json().then((notes) => {
            follow_up(notes);
          });
        });
      };
      module.exports = getNotes2;
    }
  });

  // callNote.js
  var require_callNote = __commonJS({
    "callNote.js"(exports, module) {
      var callNote2 = (index, follow_up) => {
        fetch("http://localhost:3000/notes").then((response) => {
          response.json().then((notes) => {
            follow_up(notes[index]);
          });
        });
      };
      module.exports = callNote2;
    }
  });

  // index.js
  var addNote = require_addNote();
  var getNotes = require_getNotes();
  var callNote = require_callNote();
  var notesList = document.querySelector("#noteList");
  var displayNotes = document.querySelector("#displayNotes");
  var submitButton = document.querySelector("#submit");
  var noteContent = document.querySelector("#noteContent");
  var updateDisplay = () => {
    noteContent.value = "";
    getNotes(resetNotes);
  };
  var resetNotes = (notes) => {
    notesList.innerHTML = "";
    notes.forEach((note, index) => {
      addNoteToBoard(note, index);
    });
  };
  var addNoteToBoard = (note, idNumber) => {
    return newElement("p", note.title, "note", `${idNumber}`, newNoteElement, noteContent);
  };
  var useCallNote = (note) => {
    displayContent.innerHTML = "";
    return newElement("p", note.content, "callNote", "note00", newREL, displayContent);
  };
  var newElement = (elementType, elementContent, elementClass, elementID, listenFunction, docLoc) => {
    let newElement2 = document.createElement(elementType);
    setAttributes(newElement2, elementContent, elementClass, elementID);
    addElementToPage(newElement2, listenFunction, docLoc);
    return newElement2;
  };
  var setAttributes = (newElement2, elementContent, elementClass, elementID) => {
    newElement2.innerText = elementContent;
    newElement2.className = elementClass;
    newElement2.id = elementID;
  };
  var addElementToPage = (newElement2, listenFunction, docLoc) => {
    listenFunction(newElement2);
    docLoc.appendChild(newElement2);
  };
  submitButton.addEventListener("click", () => {
    addNote(noteContent, updateDisplay);
  });
  var newNoteElement = (newElement2) => {
    newEl.addEventListener("click", () => {
      console.log(`Clicked note, id: ${newElement2.id}`);
      callNote(Number(newElement2.id), useCallNote);
    });
  };
  var newREL = (newElement2) => {
    newElement2.addEventListener("click", () => {
      location.reload();
    });
  };
  updateDisplay();
  console.log("Frontend loaded");
})();
