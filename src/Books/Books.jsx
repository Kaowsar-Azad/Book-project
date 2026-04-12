import React, { useContext } from 'react'
import { BookContext } from '../components/Context/Context'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ReadListBook } from '../components/ListBook/ReadListBook';
import { WishListBook } from '../components/WishListBook/WishListBook'

export const Books = () => {
  const {storedBooks , WishlistBooks } = useContext (BookContext)
  return (
    <div className='container mx-auto'>
      
       
        <Tabs className='mt-10'>
    <TabList>
      <Tab>Read list</Tab>
      <Tab> Wish list</Tab>
    </TabList>

    <TabPanel>
      <ReadListBook/>
    </TabPanel>
    <TabPanel>
      <WishListBook/>
    </TabPanel>
  </Tabs>
    </div>
  )
}
