import React,{useState,useEffect} from 'react'

 function Balance({balance}) {
    const[currantBalance,setCurrantBalance]= useState(0)
    useEffect(() => {
           setCurrantBalance(balance);
    }, [balance]);
  return (
 
         <div className="bg-white border border-success text-center rounded">
            <p className="lead mt-3">
                <span className="fw-bold me-2 ">
                    Balance:
                </span>
                <span className="badge bg-success">
                    ${currantBalance}
                </span>
            </p>

         </div>
  
  )
}
export default Balance;