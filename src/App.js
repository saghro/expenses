import React,{useState} from 'react'
import Balance from './Components/Balance';
import InExList from './Components/InExList';
import Transaction from './Components/Transaction';


function App() {
  const[expenses,setExpenses]= useState([
    {
      id:1 , label:'Rent',amount:'300'
    },
    {
      id:2 , label:'Phone repaire',amount:'30'
    }
  ]);
  const[incomes,setIncomes]= useState([
    {
      id:1 , label:'Salary',amount:'3000'
    },
    
  ]);
  const addIco=(income)=>{
    setIncomes([income, ...incomes])
  }
   const addExp=(expense)=>{
    setExpenses([expense, ...expenses])
  }
  const removeIncome= (id)=>{
    const updatedIco = incomes.filter(income=>income.id!=id);
    setIncomes(updatedIco)
}
const removeExp= (id)=>{
  const updatedExp = expenses.filter(expense=>expense.id!=id);
  setExpenses(updatedExp)
}
  return (
    <div className="container">
       <div className="row my-4">
          <div className="col-md-8 mx-auto">
             <div className="card">
              <div className="card-body">
                <Balance balance="3000"/>
                <Transaction addIco={addIco} addExp={addExp}/>
                <InExList incomes={incomes} expenses={expenses}
                 removeExp={removeExp} removeIncome={removeIncome}
                />
              </div>
             </div>
          </div>
       </div>
    </div>
  )
}


export default App;
