import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid';

 function Transaction({addIco,addExp}) {
    const[label,setLabel]=useState('');
    const[amount,setAmount]=useState('');
    const add=(income)=>{
        addIco(income);
        setTimeout(()=>{
            setLabel('');
            setAmount('');
        },500);
    }
    const addEx=(expense)=>{
        addExp(expense);
        setTimeout(()=>{
            setLabel('');
            setAmount('');
        },500);
    }
    
  return (
    <div className='row'>
        <div className="col-md-6 mx-auto">
            <div className="row g-3 my">
                <div className="col-auto">
                    <button
                        disabled={!label || !amount}
                       onClick={()=> add({id: uuidv4(), label,amount})}
                      className="btn btn-sm btn-success mb-3">
                        <i className="bi bi-bag-plus-fill"></i>
                    </button>
                </div>
                <div className="col-auto">
                    <input type="text"
                    value={label}
                    onChange={(event)=>setLabel(event.target.value)}
                    className="form-control mb-2" 
                    placeholder='label'/>
                    <input type="number" 
                    value={amount}
                    onChange={(event)=>setAmount(event.target.value)}
                    className="form-control mb-2" 
                     placeholder='amount'/>
                </div>
                <div className="col-auto">
                    <button
                       disabled={!label || !amount}
                      onClick={()=> addEx({id:uuidv4(), label,amount})}
                     className="btn btn-sm btn-danger mb-3">
                        <i className="bi bi-bag-dash-fill"></i>
                    </button>
                </div>
            </div>
        </div>
      
    </div>
  )
}
export default Transaction;
