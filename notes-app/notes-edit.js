const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');
const dateElement = document.querySelector('#last-edited');
const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find(function(note) {
  return note.id === noteId;
});

if (note === undefined) {
  location.assign('/index.html');
}

// Managing the title
titleElement.value = note.title;
titleElement.addEventListener('input', function(e) {
  note.title = e.target.value;
  note.updatedAt = moment().valueOf();
  dateElement.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
});

// Managing the body
bodyElement.value = note.body;
bodyElement.addEventListener('input', function(e) {
  note.body = e.target.value;
  note.updatedAt = moment().valueOf();
  dateElement.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
});

// Managing last edited
dateElement.textContent = generateLastEdited(note.updatedAt);

// Remove current note
removeElement.addEventListener('click', function() {
  removeNote(note.id);
  saveNotes(notes);
  location.assign('/index.html');
});

// Attach events to window
window.addEventListener('storage', function(e) {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);

    note = notes.find(function(note) {
      return note.id === noteId;
    });

    if (note === undefined) {
      this.location.assign('/index.html');
    }

    titleElement.value = note.title;
    bodyElement.value = note.body;
    dateElement.textContent = generateLastEdited(note.updatedAt);
  }
});
