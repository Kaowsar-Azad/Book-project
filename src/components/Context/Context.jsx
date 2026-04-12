import React, { Children, useState } from 'react'
import { createContext } from 'react'
import { toast } from 'react-toastify'
  

export  const BookContext = createContext()


export const BookProvider = ({children}) => {
     const [storedBooks , setstoredBooks] = useState([])
     const [WishlistBooks , setWishlistBooks] = useState([])
    
const handleRead = (currentBook) => {
  const isExistBook = storedBooks.find(
    (book) => book.bookId === currentBook.bookId
  )
  if(isExistBook){
    toast.error("the book Exist")
  } else {
    setstoredBooks([...storedBooks, currentBook])
    toast.success(`${currentBook.bookName}is add to read list`  )
  }
}  


const handleWishlist = (currentBook) => {


     const isExistBooklist =  storedBooks.find(
    (book) => book.bookId === currentBook.bookId
  );
  if(isExistBooklist){
    toast.error("The book is already exist read list ")
    return;
  }


  const isExistBook =  WishlistBooks.find(
    (book) => book.bookId === currentBook.bookId
  )
  if(isExistBook){
    toast.error("the book Exist to read list")
  } else {
     setWishlistBooks([... WishlistBooks, currentBook]) 
    toast.success(`${currentBook.bookName}is add to  Wishlist list`  )
  }
}
    
    const data ={
        setstoredBooks,
        storedBooks,
        handleRead ,
        setWishlistBooks,
        WishlistBooks  ,
        handleWishlist

    }
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>
}
