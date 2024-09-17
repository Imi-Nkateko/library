
const myLibrary = ["book1", "book2", "book3"];
const newBookBtn = document.querySelector('#newBook-btn');
const formEl = document.querySelector('form')


// New book button to display form
newBookBtn.addEventListener('click', () => {
    formEl.style.display = 'block'
})


function Book() {
 
}

function addBookToLibrary() {
    const container = document.querySelector('.container');
    myLibrary.forEach(book => {
        container.innerHTML += `
        <div class="card-container">
            <h1>${book}</h1>
        </div>
        `
    })
}

addBookToLibrary()