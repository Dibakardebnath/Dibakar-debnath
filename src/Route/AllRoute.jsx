import React from "react"
import { Route, Routes } from "react-router-dom";
import { Login } from "../page/Login";
import { Signup } from "../page/Signup";
import { Dashboard } from "../page/Dashboard";
import {useSelector} from 'react-redux'


export const AllRoute=()=>{
const {auth}=useSelector((store)=>{
    return store
})
    return (
        <Routes>
            <Route path="/" element={auth?<Dashboard/>:<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
};