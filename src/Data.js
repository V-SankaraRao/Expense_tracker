import { useContext, useEffect } from "react"
import { GlobalContext } from "./context/GlobalContext"

export default function Data(){
    const {income,expense,total,setTotal}=useContext(GlobalContext);
    console.log(income,expense)
    useEffect(()=>{
        setTotal(income-expense);
    })
    return <div>
        <div>
            <h2>Current Balance is ${total}</h2>
            <h1>${income}</h1>
            <p>Total Income</p>
            <h1>${expense}</h1>
            <p>Total Expense</p>
        </div>

        {income?.income}
    </div>
}