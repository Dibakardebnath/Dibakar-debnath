import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Analytic } from "./Analytic";
import { History } from "./History";
import { Tracker } from "./Tracker";

export const Dashboard=()=>{

    const [activebtn,setActivebtn]=useState('tracker')

    const Component=()=>{
        console.log("yues")
        if(activebtn==="analytic"){
            return <Analytic/>
        }else if(activebtn==="history"){
            return <History/>
        }else{
            return <Tracker/>
        }
    }

    return(
        <Box>
          <Button onClick={()=>setActivebtn("tracker")}>Tracker</Button>

          <Button onClick={()=>setActivebtn("analytic")}>Analytic</Button>


          <Button onClick={()=>setActivebtn("history")}>History</Button>

                {Component()}
            
        </Box>
    )
}