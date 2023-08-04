
import { Box } from '@chakra-ui/react'
import React from 'react'
import { Chart,ArcElement,Tooltip,Legend} from "chart.js"
import {Pie}  from "react-chartjs-2";
import { useSelector } from 'react-redux';


Chart.register(ArcElement,Tooltip,Legend);

 export const Analytic = () => {
 const {trakerArray}=useSelector((store)=>{return store})

   const dataIncome={

    labels: trakerArray.map((ele)=>ele.type==="Income"?ele.category:""),
    datasets:[{
      data:trakerArray.map((ele)=>ele.type==="Income"?ele.amount:""),backgroundColor:getRandomColors(trakerArray.length)
    }]


    //    labels:["one","two","three"],
    //   datasets:[{data:[5,6,9], backgroundColor:["black","grey","skyblue"]}]
   };
   const dataExpense={


   labels: trakerArray.map((ele)=>ele.type==="Expense"?ele.category:""),
  datasets:[{
    data:trakerArray.map((ele)=>ele.type==="Expense"?ele.amount:""),backgroundColor:getRandomColors(trakerArray.length)
  }]

    // labels:["Four","five","six"],
    // datasets:[{data:[4,5,6], backgroundColor:["green","black","yellow"]}]
   }
   const options ={};

   
  return (
    <Box style={{display:"flex",justifyContent:"space-evenly"}}>
      <Box>
          <h1 style={{fontSize:"28px" ,textAlign:"center",fontWeight:"bold"}}>Income</h1>
          <Pie data={dataIncome} options={options}></Pie>
      </Box>
      <Box>
        <h1 style={{fontSize:"28px" ,textAlign:"center",fontWeight:"bold"}}>Expenses</h1>
          <Pie data={dataExpense} options={options}></Pie>
      </Box>
    </Box>
  )
}


function getRandomColors(numColors) {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      colors.push('#' + Math.floor(Math.random() * 16777215).toString(16));
    }
    return colors;
  }

// return (
//     <div>
//         <h2>Expense</h2>
//     <div style={{width:"300px"}}  >
  
//       {data.length > 0 && (
//         <Pie 
//           data={{
            
//             labels: data.map((item) => item.type==="Expense"? item.category:""),
//             datasets: [
//               {
//                 data: data.map((item) => item.type==="Expense"? item.amount:""),
//                 backgroundColor: getRandomColors(data.length)
//               },
//             ],
//           }}
//         />
//       )}
//     </div>
//     </div>
//   );
// };