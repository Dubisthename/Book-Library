const myLibrary = [];

// Constructor to create Book objects
function Book(title, author, pageNumber, readStatus) {
    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.readStatus = readStatus;
}

// Function to Add a Book to the Library
function addBookToLibrary(title, author, pageNumber, readStatus) {
    const newBook = new Book(title, author, pageNumber, readStatus);
    myLibrary.push(newBook);
    displayBooks();
}

// Function to Display Books
function displayBooks() {
    const libraryDisplay = document.getElementById("libraryDisplay");
    libraryDisplay.innerHTML = ""; // Clear the display

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `
            <h3>Title: ${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pageNumber}</p>
            <p><strong>Status:</strong> ${book.readStatus ? "Read " : "Not Read "}</p>
            <button onclick="toggleReadStatus(${index})">Toggle Read</button>
            <button onclick="removeBook(${index})">Remove</button>
        `;
        libraryDisplay.appendChild(bookCard);
    });
}

// Function to Toggle Read Status
function toggleReadStatus(index) {
    myLibrary[index].readStatus = !myLibrary[index].readStatus;
    displayBooks();
}

// Function to Remove a Book
function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

// Function to Show/Hide Form
function toggleForm() {
    const form = document.getElementById("bookForm");
    form.style.display = form.style.display === "none" ? "block" : "none";
}

// Handle Form Submission
document.getElementById("bookForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
    
    if (title && author && pages) {
        addBookToLibrary(title, author, pages, read);
        this.reset();
        toggleForm();
    }
});

// Example Books (initially added)
addBookToLibrary("My Hero Academia", "Kohei Horikoshi", 1000, false);
