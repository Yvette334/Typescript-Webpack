// --- Starter JavaScript Code ---

// A simple Book class (using constructor function in JS)

class Book {
    title: string;
    author: string; 
    year: number;

    constructor( title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
    }
}

// Function to display book information
function displayBook(book: Book): void {
  const bookList = document.getElementById("book-list");
  const bookDiv = document.createElement("div");
  bookDiv.innerHTML = `
    <h2>${book.title}</h2>
    <p>By ${book.author}, ${book.year}
    </p>
  `;
  bookList.appendChild(bookDiv);
}

interface Review {
    bookId: number;
    rating: number; 
    comment: string;
}

const reviews: Review[] = [];

function addReview(bookId: number, rating: number, comment: string): void {
    const newReview: Review = {bookId, rating, comment};
    reviews.push(newReview);
    console.log("Added the review", newReview);
}

addReview(1, 5, "Is a perfect, timeless adventure");
addReview(2, 4, " Epic masterpiece that sets the gold standard for fantasy");

// Create some book objects
const book1: Book = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book2: Book = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);

// Display the books on the webpage
displayBook(book1);
displayBook(book2);