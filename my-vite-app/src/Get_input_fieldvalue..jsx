import { useState } from "react";

function Get_input_fieldvalue(){
    const [val,setVal]=useState("")
    return(
        <div><h1>
            get input field value
            </h1>
            <input type="text" onChange={(event)=>setVal(event.target.value)} placeholder="enter user name"></input>
          <h1>{val}</h1>
          <button onClick={()=>setVal("")}>Clear Value</button>
          
            </div>
        

)
}
export default Get_input_fieldvalue;