import React, { useContext } from 'react'
import { BookCard } from '../ui/BookCard'
import { BookContext } from '../Context/Context'

export const ReadListBook = () => {
    const {storedBooks , WishlistBooks } = useContext (BookContext)
  return (
    <div>
        {
        storedBooks.map((book , ind ) => (
            <BookCard key={ind} BooksApi={book}/>
        ))
    }
    </div>
  )
}
