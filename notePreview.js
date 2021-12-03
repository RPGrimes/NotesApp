const preview = (note) => {
  if(note.length <= 20){
    return `${note}`
  } else {
  return `${note.substring(0, 20)}`
  }
}

module.exports = preview;