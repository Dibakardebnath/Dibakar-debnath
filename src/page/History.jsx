

import { Box, Button, Select } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletdata, gettrakarr, sortfoo } from "../Redux/Action";

export const History=() => {
  const [show,setshow]=useState(false)
    const dispatch=useDispatch()

    const {trakerArray}=useSelector((store)=>store)

    useEffect(()=>{
       dispatch(gettrakarr())
    },[show])

    const handldel=(id)=>{
      dispatch(deletdata(id))
      setshow(!show)
    }
   const handchg=(val)=>{
    dispatch(sortfoo(val))
   }
    return (
        <Box>
          <Select>
            <option value="all">All</option> 
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </Select>
          <Select onChange={(e)=>handchg(e.target.value)}>
            <option value="">select sorting</option>
            <option value="asc">Ascending</option>
            <option value="desc">Desecding</option>
            
          </Select>

           {trakerArray?.map((ele)=>(
            <Box>
            <Box>{ele.type}</Box>
           <Box>{ele.category}</Box>
             <Box>{ele.date}</Box>
             <Button marginRight={"5px"} onClick={()=>handldel(ele.id)}>Delete</Button>
             <Button>Edit</Button>

            </Box>
          
           )
           )}

        </Box>
       
    )
}