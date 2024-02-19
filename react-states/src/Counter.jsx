import { useState } from "react"

export default function Counter(){
   let [count,setCount]=useState(0);

   function inCount(){
    setCount(count+1);
    
   }

    return(
       <div>
         <p>counter ={count}</p>
        <button onClick={inCount}>Increase Count</button>
       </div>
         
    )
}