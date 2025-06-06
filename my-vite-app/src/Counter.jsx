import { useState } from "react";

const Counter=()=>{
    const [count,setCount]=useState(0);
    const [rcounter,setRCounter]=useState(10);
    return(
        <div>
            <h1>Counter:{count}</h1>
            <h2>R COUNTER:{rcounter}</h2>
            <button onClick={()=>setCount(count + 1)}>update counter</button>
                    <button onClick={()=>setRCounter(rcounter - 1)}>update counter</button>

        </div>
    )
}
export default Counter;