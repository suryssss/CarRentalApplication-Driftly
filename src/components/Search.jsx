import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Separator } from "@/components/ui/separator"
  import { CiSearch } from "react-icons/ci";
  import Data from '@/Shared/Data';


function Search() {

      
  return (
    <div className='p-2 md:p-5 bg-white rounded-md md:rounded-full flex flex-col md:flex-row gap-10 px-15 items-center w-[60%]'>
    <Select >
        <SelectTrigger className="outline-none md:border-none w-full shadow-none font-semibold">
            <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="used">Pre Owned Cars</SelectItem>
            <SelectItem value="premium">Premium</SelectItem>
        </SelectContent>
    </Select>
    <Separator orientation="vertical" className="hidden md:block"/>
    <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none font-semibold">
            <SelectValue placeholder="Car Brand" />
        </SelectTrigger>
        <SelectContent>
        {Data.CarMakes.map((maker,index)=>(
    <SelectItem value={maker.name}>{maker.name}</SelectItem>
))}
        </SelectContent>
    </Select>
    <Separator orientation="vertical" className="hidden md:block"/>
    <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none font-semibold">
            <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
            {Data.Pricing.map((price,index)=>(
                <SelectItem value={price.amount}>{price.amount}</SelectItem>
            ))}
        </SelectContent>
    </Select>
    <div>
    <CiSearch className='text-[50px] bg-primary rounded-full p-3 text-white'/>
    </div>
    </div>
  )
}

export default Search
