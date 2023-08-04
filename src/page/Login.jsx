import { Box, Button, Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authentication } from "../Redux/Action";



export const Login=() => {
    const dispatch=useDispatch()
const navigate=useNavigate()
    const [logstate,setLogState] =useState({
        email:"",
        password:""
    })

    
const handlLog=()=>{
   axios.get('http://localhost:8000/posts')
   .then(({data})=>{
    let ans=data.filter((ele)=>{
        return (logstate.email===ele.email && logstate.password===ele.password)
    })

    if(ans.length>0){

        alert("login success")
        dispatch(authentication(true))
        
        navigate("/")
    }else{
        alert("login failure")
    }
   })
}
    return (
        <Box id="form">
        <Box>
      
      <Input type="email" placeholder="Enter email" name="email" value={logstate.email}
       onChange={(e)=>setLogState({...logstate,[e.target.name]:e.target.value})} ></Input>

      <Input type="password" placeholder="Enter password" name="password" value={logstate.password}
       onChange={(e)=>setLogState({...logstate,[e.target.name]:e.target.value})} ></Input>

    <Button onClick={handlLog}>Login</Button>
        </Box>
     
    </Box>
    )
}