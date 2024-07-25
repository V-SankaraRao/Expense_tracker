// GlobalContext.js
import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
    const[total,setTotal]=useState(0);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [isOpen, setOpenClose] = useState(false);
    const[hist,setHist]=useState([]);
    function handleNew(amt,type){
        
    if(type=='income'){
        setIncome(i=>i+parseInt(amt));
        
    }
    else{
        setExpense(i=>i+parseInt(amt))
        
    }
    setHist(arr=>[...arr,{typeOfPayment:type,amount:amt}])
         console.log(hist);
         
    }

    return (
        <GlobalContext.Provider value={{ income, setIncome, expense, setExpense, isOpen, setOpenClose,total,setTotal ,handleNew,hist,setHist}}>
            {children}
        </GlobalContext.Provider>
    );
}
