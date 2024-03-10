import { useEffect, useState } from 'react';
import BookCard from './BookCard';

const Books = () => {
  const [books, setBooks] = useState([]);
  console.log(books);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      const response = await fetch(
        'https://chapter-quest-server.vercel.app/api/v1/books'
      );
      const booksData = await response.json();

      setBooks(booksData?.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {books.map((book) => {
        return <BookCard key={book?.id} {...book} />;
      })}
    </div>
  );
};

export default Books;
