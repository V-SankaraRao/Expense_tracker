import { useContext, useRef, useState } from "react"
import { GlobalContext } from "./context/GlobalContext"
import './App.css'
export default function Form() {
    let ref=useRef(null);
    const { isOpen, setOpenClose,handleNew,setTotal } = useContext(GlobalContext);
    const [selectedOption, setSelectedOption] = useState("income");

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    function handleForm(){
        if(ref.current.value>0){
        handleNew(ref.current.value,selectedOption);
        console.log(ref.current.value);
        ref.current.value=0;
        }
        else{
            alert("amount must greater than 0")
        }
        
        
    }
    return <div className="form">
    <div className="form-row">
        <label>Amount:</label>
        <input type="number" ref={ref} required/>
    </div>
    <div className="form-row">
        <label>Description:</label>
        <input type="text" />
    </div>
    <div className="form-row">
        <label>
            Income
            <input
                type="radio"
                value="income"
                checked={selectedOption === "income"}
                onChange={handleChange}
            />
        </label>
        <label>
            Expense
            <input
                type="radio"
                value="expense"
                checked={selectedOption === "expense"}
                onChange={handleChange}
            />
        </label>
    </div>
    <div className="form-row">
        <button className="btn-cancel"onClick={()=>setOpenClose(false)}>Cancel</button>
        <button className="btn-add" onClick={handleForm}>Add</button>
    </div>
</div>
}