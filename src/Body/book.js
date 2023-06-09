import './Body.css';
import { useState } from 'react';

const Book = () => {
    const [books, setBooks] = useState([
        {
            id: 1,
            title: "Five Feet Apart",
            url: "../../../assets/book_pic.jpg",
            author: "Athir Fria"
          },
          {
            id: 2,
            title: "The Fault in Our Stars",
            url: "../../../assets/book_pic.jpg",
            author: "John Green"
          },
          {
            id: 3,
            title: "Me Before You",
            url: "../../../assets/book_pic.jpg",
            author: "Jojo Moyes"
          },
          {
            id: 4,
            title: "The Time Traveler's Wife",
            url: "../../../assets/book_pic.jpg",
            author: "Audrey Niffenegger"
          },
          {
            id: 5,
            title: "The Notebook",
            url: "../../../assets/book_pic.jpg",
            author: "Nicholas Sparks"
          },
          {
            id: 6,
            title: "The Hunger Games",
            url: "../../../assets/book_pic.jpg",
            author: "Suzanne Collins"
          },
          {
            id: 7,
            title: "To Kill a Mockingbird",
            url: "../../../assets/book_pic.jpg",
            author: "Harper Lee"
          },
          {
            id: 8,
            title: "The Great Gatsby",
            url: "../../../assets/book_pic.jpg",
            author: "F. Scott Fitzgerald"
          },
          {
            id: 9,
            title: "Pride and Prejudice",
            url: "../../../assets/book_pic.jpg",
            author: "Jane Austen"
          },
          {
            id: 10,
            title: "The Da Vinci Code",
            url: "../../../assets/book_pic.jpg",
            author: "Dan Brown"
          },
          {
            id: 11,
            title: "The Girl with the Dragon Tattoo",
            url: "../../../assets/book_pic.jpg",
            author: "Stieg Larsson"
          },
          {
            id: 12,
            title: "Gone Girl",
            url: "../../../assets/book_pic.jpg",
            author: "Gillian Flynn"
          },
          {
            id: 13,
            title: "The Lord of the Rings",
            url: "../../../assets/book_pic.jpg",
            author: "J.R.R. Tolkien"
          },
          {
            id: 14,
            title: "Harry Potter and the Philosopher's Stone",
            url: "../../../assets/book_pic.jpg",
            author: "J.K. Rowling"
          },
          {
            id: 15,
            title: "The Chronicles of Narnia",
            url: "../../../assets/book_pic.jpg",
            author: "C.S. Lewis"
          }

    ])

    return ( 
        <div className="books-detail">
            {books.map((book) => (
                <div className="book" key={book.id}>
                    <img src={book.url} alt="" />
                    <h3>{book.title}</h3>
                    <p>by {book.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Book;