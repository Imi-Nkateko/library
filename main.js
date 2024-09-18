
const myLibrary = ["book1", "book2", "book3"];
const newBookBtn = document.querySelector('#newBook-btn');
const formEl = document.querySelector('form')


// New book button to display form
newBookBtn.addEventListener('click', () => {
    formEl.style.display = 'block'
})


function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const container = document.querySelector('.container');
    const author = document.querySelector('#author').value;
    const title = document.querySelector('#title').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').value;

    const newBook = new Book(author, title, pages, read);
    console.log(read)
    myLibrary.push(newBook);
  
        container.innerHTML += `
        <div class="card-container">
            <h1>${newBook.author}</h1>
            <p>${newBook.title}</p>
            <p>${newBook.pages}</p>
        </div>
        `   
}

const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLibrary();
})
 

// function generateLibrary() {

// }