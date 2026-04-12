
import React, { use } from 'react'
import { BookCard } from '../ui/BookCard';

const BooksPromise = fetch("/booksData.json").then((res) => res.json());

export const AllBooks = () => {
  const BooksApi = use(BooksPromise)

  return (
    <>
      <h1 className='text-7xl font-bold text-center py-20'>Book</h1>
      <div className='grid grid-cols-3 gap-6 container mx-auto mt-20'>
        {BooksApi.map((book) => (
          <BookCard key={book.bookId} BooksApi={book} />
        ))}
      </div>
    </>
  )
}