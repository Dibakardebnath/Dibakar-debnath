import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'

export const Nav=()=>{
    return (
        <Box id="navbar">
         <Link to={'/'}>Dashboard</Link>
        <Link to={'/signup'}>Signup</Link>
        <Link to={'/login'}>Login</Link>
        </Box>
       

    )
}