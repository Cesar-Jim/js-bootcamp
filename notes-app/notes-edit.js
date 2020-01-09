const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');
const noteId = location.hash.substring(1);
const notes = getSavedNotes();
const note = notes.find(function(note) {
  return note.id === noteId;
});

if (note === undefined) {
  location.assign('/index.html');
}

// Managing the title
titleElement.value = note.title;
titleElement.addEventListener('input', function(e) {
  note.title = e.target.value;
  saveNotes(notes);
});

// Managing the body
bodyElement.value = note.body;
bodyElement.addEventListener('input', function(e) {
  note.body = e.target.value;
  saveNotes(notes);
});

// Remove current note
removeElement.addEventListener('click', function() {
  removeNote(note.id);
  saveNotes(notes);
  location.assign('/index.html');
});
