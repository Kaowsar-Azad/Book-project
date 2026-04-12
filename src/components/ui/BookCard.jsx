import React from 'react'
import { Link } from 'react-router'

export const BookCard = ({ BooksApi}) => {
  return (
    
        <div to={`/BooksDetails/${BooksApi.bookId}`} className='grid grid-cols-3 gap-6 container mx-auto  mt-20 '>
        
        {BooksApi.map((Book) => {
            return(
                <Link to={`/BooksDetails/${Book.bookId}`} className="card  bg-base-100 w-96 shadow-sm">
  <figure className='p-6'>
    <img className='rounded-xl h-[300px]'
      src={Book.image}
      alt="Shoes" />
  </figure >
  <div className="card-body">
    <div className=' flex items-center gap-2'>
      {Book.tags.map((tag) => (<div className="badge badge-success">{tag}</div>))}  
    </div>
    <h2 className='font-bold text-2xl'>{Book.bookName}</h2>
    <p className='font-semibold text-lg text-[#131313]'>by: {Book.author}</p>
    <div className="card-actions justify-end border-t border-dashed border-gray-400">

    </div>
    <div className='flex justify-between'>
        <h1 className="badge font-semibold ">{Book.category}</h1>
      <h2 className="badge font-semibold">Rating: {Book.rating}/5</h2>
    </div>
  </div>
</Link>
            )
        })}
    </div>
    
  )
}
