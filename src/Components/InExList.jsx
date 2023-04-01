import React from 'react'

 function InExList({incomes,expenses,removeIncome,removeExp}) {
  return (
   <div className="row my-3">
      <div className="col-md-10 mx-auto">
         <div className="rox d-flex justify-content-center">
            <div className="col-md-5">
               <h4 className="mb-3">Expenses</h4>
                 <ul className="list-group">
                    {
                        expenses.map(expenses=>   
                        <li key={expenses.id} className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                          <h6 className="mb-1">
                            {expenses.label} ${expenses.amount}
                          </h6>
                            <span className="text-danger">
                              <i  onClick={()=>removeExp(expenses.id)}
                              className="bi bi-bag-x"></i>
                            </span>
                       </div>
                    </li>)
                    }
                </ul>
        
            </div>
            <div className="col-md-5">
               <h4 className="mb-3">Expenses</h4>
                 <ul className="list-group">
                   {
                    incomes.map(incomes =>
                        <li key={incomes.id} className="list-group-item list-group-item-action">
                      <div className="d-flex w-100 justify-content-between">
                        <h6 className="mb-">
                          {incomes.label} ${incomes.amount}
                        </h6>
                          <span className="text-danger">
                            <i onClick={()=>removeIncome(incomes.id)} className="bi bi-bag-x"></i>
                          </span>
                     </div>
                  </li>
                  )
                   }
                </ul>
        
            </div>
         </div>
        
      </div>
   </div>

  )
}
export default InExList;
