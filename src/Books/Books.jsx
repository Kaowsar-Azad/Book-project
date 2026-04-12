import React, { useContext } from 'react'
import { BookContext } from '../components/Context/Context'

export const Books = () => {
  const {storedBooks , WishlistBooks } = useContext (BookContext)
  return (
    <div>
      read list:{storedBooks.length}
       WishlistBooks list:{ WishlistBooks.length}
    </div>
  )
}
