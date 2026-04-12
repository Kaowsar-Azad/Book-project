import React, { useState } from 'react'
import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router'
import { BookContext } from '../../components/Context/Context';

export const BooksDetails = () => {
    const {bookId} = useParams();
    console.log(bookId)
    

    const books = useLoaderData();
    console.log(books)

    const FindBook = books.find(book => book.bookId == bookId)
    console.log(FindBook)

    const { handleRead ,storedBooks , handleWishlist } = useContext (BookContext)

  return (
    <>
    <div className="card lg:card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src={FindBook.image}
      alt="Album" />
  </figure>
  <div className="card-body ">
    <div>
        <h2 className='font-bold text-2xl'>{FindBook.bookName}</h2>
    <p className='font-semibold text-lg text-[#131313]'>by: {FindBook.author}</p>
    </div>
    <h2 className="card-title">{FindBook.category}</h2>
    <p ><span className='font-bold text-1xl'>Review:</span> {FindBook.review}</p>
    <div className=' flex items-center gap-2'> Tag:
      {FindBook.tags.map((tag) => (<div className="badge badge-success">{tag}</div>))}  
    </div>
    <div className='border-t'>
    <div className='mt-7'>
         <h1 className='font-bold text-lg'>Number of Pages: {FindBook.totalPages}</h1>
     <h1 className='font-bold text-lg'>Publisher: {FindBook.publisher}</h1>
     <h1 className='font-bold text-lg'>Year of Publishing: {FindBook.yearOfPublishing}</h1>
     <h1 className='font-bold text-lg'>Rating: {FindBook.rating}</h1>
    </div>
    </div>
    <div className="card-actions justify-start mt-3">
        <button className="btn  btn-soft" onClick={() => handleRead(FindBook)}>Read</button>
      <button className="btn btn-accent" onClick={() => handleWishlist(FindBook)}>Wishlist</button>
    </div>
  </div>
</div>
    </>
  )
}
