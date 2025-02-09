import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button';

function header() {
    const {user,isSignedIn}=useUser();
  return (
    <div className='fixed top-0 left-0 flex justify-between items-center shadow-sm p-5 mt-0 z-50 w-full px-10 '>
        <img src='/logo.svg' width={150} height={100}/> 
        <div className='flex items-center '>
        <ul className="hidden md:flex gap-16 mr-20"> 
          <li className='font-medium  hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
          <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Our Cars</li>
          <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Services</li>
          <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Contacts</li>
        </ul>

        {isSignedIn?
            <div className='flex items-center gap-4'>
                <UserButton/>
                <Button>Submit Listing</Button>
            </div>
            :
            <Button>Submit Listing</Button>
        }
        </div>
    </div>

  )
}

export default header