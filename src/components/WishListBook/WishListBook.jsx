import React, { useContext } from 'react'
import { BookContext } from '../Context/Context'
import { BookCard } from '../ui/BookCard'
export const WishListBook = () => {
    const { WishlistBooks } = useContext (BookContext)
  return (
    
     <div>
            {
            WishlistBooks.map((book , ind ) => (
                <BookCard key={ind} BooksApi={book}/>
            ))
        }
        </div>
  )
}
