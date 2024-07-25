import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "./context/GlobalContext"
import './App.css'
export default function History(){
    const{hist,setHist}=useContext(GlobalContext);
    console.log(hist);
    
    
    return <div>
       { hist?.map((item)=><h1 className={item.typeOfPayment==='income'?"income":"expense"}>Amount :{item.amount} --------------------- Type :{item.typeOfPayment}</h1>
       )
    }
    </div>
}