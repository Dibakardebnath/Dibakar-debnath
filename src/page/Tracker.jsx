
import { Box, Button, Input, Select } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

export const Tracker=() => {
    const [tracker,setTracker]=useState({
        type:"",
        category:"",
        amount:"",
        date:""
    })

 
const handlsub=(e)=>{
    console.log(tracker)
    console.log("yesdome")
e.preventDefault()
 setData(tracker)
 setTracker({
    type:"",
        category:"",
        amount:"",
        date:""
 })
}
const setData=(tracker)=>{
    console.log(tracker)
    axios.post("http://localhost:8000/track",tracker)
    
}

    return (
        <Box>
            <form onSubmit={handlsub}>
                <Select name="type" value={tracker.type}
                 onChange={(e)=>setTracker({...tracker,[e.target.name]:e.target.value})}>
                     <option value="">Select Category</option>
                      <option value="Income">Income</option>
                      <option value="Expense">Expense</option>
                </Select>

                <Select name="category" value={tracker.category}
                 onChange={(e)=>setTracker({...tracker,[e.target.name]:e.target.value})}>
                 {
                    tracker.type ==='Income' ?(
                        <>
                        <option value="Salary">Salary</option>
                        <option value="Gifts">Gifts</option>
                        <option value="Refunds">Refunds</option>
                         <option value="Other">Other</option>
                        </>
                    ):(
                        <>
                          <option value="Food & Drinks">Food & Drinks</option>
                           <option value="Shopping">Shopping</option>
                           <option value="Housing">Housing</option>
                           <option value="Bills">Bills</option>
                           <option value="Vehicle & Transport">Vehicle & Transport</option>
                           <option value="Lifestyle">Lifestyle</option>
                        </>
                    )
                 }
                </Select>
                <Input type="text" name="amount" placeholder="Amouont" value={tracker.amount}
                onChange={(e)=>setTracker({...tracker,[e.target.name]:e.target.value})}></Input>
                <Input type="date" name="date" value={tracker.date} 
                onChange={(e)=>setTracker({...tracker,[e.target.name]:e.target.value})}></Input>
              <Button type="submit">Create</Button>
            </form>
        </Box>
    )
}