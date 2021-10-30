const addbtn = document.querySelector('.addnote');

const notes=JSON.parse(localStorage.getItem('notes'));

if(notes){
    notes.forEach((note) => {
        addnewnote(note);
    });
}

addbtn.addEventListener('click', () => {
    addnewnote();
})


function addnewnote(text ="") {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `<div class="notes"><div class="tools"><button class="edit"><i class="fas fa-edit"></i></button> <button class="delete"><i class="fas fa-trash"></i></button></div><div class="main hidden"></div><textarea></textarea></div>`;

    const editbtn = note.querySelector('.edit');
    const deletebtn = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textarea = note.querySelector('textarea');

    textarea.value=text;
    main.innerHTML=marked(text);
    editbtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    });
    
    deletebtn.addEventListener("click", () => {
        note.remove();

        updateLS();
    });

    
    textarea.addEventListener('input', (e) => {
        const { value } = e.target;
        main.innerHTML = marked(value);
        
        updateLS();
    })

    document.body.appendChild(note);
}

function updateLS() {
    const notesText = document.querySelectorAll("textarea");

    const notes = [];

    notesText.forEach((note) => {
        notes.push(note.value);
    });

    localStorage.setItem("notes", JSON.stringify(notes));
}