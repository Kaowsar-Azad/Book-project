
import { createBrowserRouter } from 'react-router'
import { MainLayout } from '../MainLayout/MainLayout'
import { HomePage } from '../Pages/HomePage/HomePage'
import { Books } from '../Books/Books'
import { BooksDetails } from '../Pages/BooksDetails/BooksDetails'

export const router = createBrowserRouter ([
  {
    path:'/',
    element:<MainLayout/> ,
    children:[
      {
        index:true,
        element:<HomePage/>
      },
      {
        path:"/Books",
    element:<Books/>,
    
      },
      {
        path:"/BooksDetails/:bookId",
    Component: BooksDetails,
    loader:() => fetch('/booksData.json')
    
      }
      
    ]
  }
])

