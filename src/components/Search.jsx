import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

function Search() {

      
  return (
    <div className='p-3 md:p-5 bg-white rounded-md md:rounded-full flex col md:flex-row gap-10 px-15 items-center w-full md:w-max'>
    <Select>
        <SelectTrigger className="w-[180px]" className='outline-none md:border-none w-full shadow-none text-lg'>
            <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
        </SelectContent>
    </Select>

    <Select>
        <SelectTrigger className="w-[180px]" className='outline-none md:border-none w-full shadow-none text-lg'>
            <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
        </SelectContent>
    </Select>

    
    <Select>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
        </SelectContent>
    </Select>

    </div>
  )
}

export default Search