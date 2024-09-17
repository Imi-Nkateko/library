
const myLibrary = ["book1", "book2", "book3"];

function Book() {
 
}

function addBookToLibrary() {
    const container = document.querySelector('.container');
    myLibrary.forEach(book => {
        const para = document.createElement('p')
        para.textContent = book;
        container.appendChild(para);
    })
}

addBookToLibrary()