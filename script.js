const notes = [];

const notesContainer = document.getElementById("notes-container");
const notesTemplateNoteCard = document.getElementById("template-note-card");
const addBtn = document.getElementById("add-btn");

function loadData() {
    notesContainer.innerHTML = "";

    notes.forEach((note) => {
        const cardClone = notesTemplateNoteCard.content.cloneNode(true);
        fillDataInCard(cardClone, note);
        notesContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, note) {
    const title = cardClone.querySelector("#title");
    const description = cardClone.querySelector("#desc");

    title.innerHTML = note.title;
    description.innerHTML = note.description;
}
function addNote() {
    const title = document.getElementById("title-input").value;
    const description = document.getElementById("desc-input").value;
    
    if (!title) {
        alert("Title can't be empty");
    } else if (!description) {
        alert("Description can't be empty");
    } else {
        const note = { title: title, description: description };

        notes.push(note);
        loadData();
    }
}

window.addEventListener("load", () => loadData());

addBtn.addEventListener("click", () => addNote());
