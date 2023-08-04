import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import './Signup.css'
import axios from 'axios'


export const Signup=()=>{
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:""
    })

    const handlsub=()=>{
       
        axios.post("http://localhost:8000/posts",user)
        alert("successfully signed")
        
    }

    return(
        <Box id="form">
            <Box>
            <Input type="text" placeholder="Enter name" name="name"
             value={user.name} onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}/>

          <Input type="email" placeholder="Enter email" name="email" value={user.email}
           onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} ></Input>

          <Input type="password" placeholder="Enter password" name="password" value={user.password}
           onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} ></Input>

        <Button onClick={handlsub}>Submit</Button>
            </Box>
         
        </Box>
    )
}