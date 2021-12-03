
const addNote = require("./addNote");
const getNotes = require("./getNotes");
const callNote = require("./callNote");

const notesList = document.querySelector("#noteList");
const displayNotes = document.querySelector("#displayNotes");
const submitButton = document.querySelector("#submit");
const noteContent = document.querySelector("#noteContent");

// FUNCTIONS

const updateDisplay = () => {
  noteContent.value = "";
  getNotes(resetNotes);
};

const resetNotes = (notes) => {
  notesList.innerHTML = "";
  notes.forEach((note, index) => {
    addNoteToBoard(note, index);
  });
};

const addNoteToBoard = (note, idNumber) => {
  return newElement("p", note.title, "note", `${idNumber}`, newNoteElement, noteContent);
};

const useCallNote = (note) => {
    displayContent.innerHTML = "";
    return newElement("p", note.content, "callNote", "note00", newREL, displayContent);
  };

const newElement = (elementType, elementContent, elementClass, elementID, listenFunction, docLoc) => {
  let newElement = document.createElement(elementType);
  setAttributes(newElement, elementContent, elementClass, elementID);
  addElementToPage(newElement, listenFunction, docLoc);
  return newElement;
};

const setAttributes = (newElement, elementContent, elementClass, elementID) => {
  newElement.innerText = elementContent;
  newElement.className = elementClass;
  newElement.id = elementID;
};

const addElementToPage = (newElement, listenFunction, docLoc) => {
  listenFunction(newElement);
  docLoc.appendChild(newElement);
};

// EVENT LISTENERS

submitButton.addEventListener("click", () => {
  addNote(noteContent, updateDisplay);
});

const newNoteElement = (newElement) => {
  newEl.addEventListener("click", () => {
    console.log(`Clicked note, id: ${newElement.id}`);
   callNote(Number(newElement.id), useCallNote);
  });
};

const newREL = (newElement) => {
  newElement.addEventListener("click", () => {
    location.reload();
  });
};

// INITIATION

updateDisplay();
console.log("Frontend loaded");