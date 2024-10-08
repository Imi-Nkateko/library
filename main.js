
const myLibrary = ["book1", "book2", "book3"];
const newBookBtn = document.querySelector('#newBook-btn');
const formEl = document.querySelector('form')


// New book button to display form
newBookBtn.addEventListener('click', () => {
    formEl.style.display = 'block'
})

class Book {
    constructor (author, title, pages, read) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    }
}




const container = document.querySelector('.container');
    const author = document.querySelector('#author');
    const title = document.querySelector('#title');
    const pages = document.querySelector('#pages');
    const read = document.querySelector('#read');

function addBookToLibrary() {    

    const newBook = new Book(author.value, title.value, pages.value, read.value);
    if (author.value === "" || title.value === "" || pages.value=== "") {
        console.log(Error)
    } else {
        myLibrary.push(newBook);

            container.innerHTML += `
        <div class="card-container">
            <h1>${newBook.author}</h1>
            <p>${newBook.title}</p>
            <p>${newBook.pages}</p>
        </div>
        `   
    }
        
}

const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLibrary();    
    document.getElementById("myForm").reset();
    // myLibrary = [];
})
 

function clearInput(){
    author.value = "";
    title.value = "";
    pages.value = "";
    read.value = ""
}