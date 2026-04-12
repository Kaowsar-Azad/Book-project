import React from 'react'
import { Link } from 'react-router'

export const BookCard = ({ BooksApi }) => {
  return (
    <Link to={`/BooksDetails/${BooksApi.bookId}`} 
          className="card bg-base-100 w-96 shadow-sm">
      <figure className='p-6'>
        <img className='rounded-xl h-[300px]'
          src={BooksApi.image}
          alt="book" />
      </figure>
      <div className="card-body">
        <div className='flex items-center gap-2'>
          {BooksApi.tags.map((tag) => (
            <div key={tag} className="badge badge-success">{tag}</div>
          ))}
        </div>
        <h2 className='font-bold text-2xl'>{BooksApi.bookName}</h2>
        <p className='font-semibold text-lg'>by: {BooksApi.author}</p>
        <div className='flex justify-between'>
          <h1 className="badge font-semibold">{BooksApi.category}</h1>
          <h2 className="badge font-semibold">Rating: {BooksApi.rating}/5</h2>
        </div>
      </div>
    </Link>
  )
}