import TransactionChartSummary from './Chart';
import { useContext } from 'react';
import './App.css';
import Data from './Data';
import Form from './Form';
import History from './History';
import { GlobalContext } from './context/GlobalContext';
function App() {
   const{isOpen,setOpenClose,expense,income}=useContext(GlobalContext);
  return (
    <>
    <div className="App">
      <div><h1>Expense Tracker</h1></div>
      <button onClick={()=>setOpenClose(true)}>Add New transection</button>
    </div>
    <div className='amt'>
    <div>
    <Data/>
    </div>
    <div>
      
      {(expense||income)&&<h1>Chart<TransactionChartSummary expense={expense} income={income}/></h1>
}</div>
    </div>
    <h1>History --</h1>
    <History/>
    {isOpen?<Form/>:null}
    </>
    
  );
}

export default App;
