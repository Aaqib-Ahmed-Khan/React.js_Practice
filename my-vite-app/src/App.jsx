import Counter from "./Counter";
import { useState } from "react";
// import Header from "./header"

import Login,{Profile,Settings, Userkey} from "./userComponent"
function App(){
  const [fruit,setFruit]=useState("apple");
  const handleFruit=()=>{
    setFruit("banana")}
    // console.log(fruit );
  return(
  <div>
    <h1>state in react</h1>
    <h1>{fruit}</h1>
    <Counter></Counter>
    <button onClick={handleFruit}>change fruit name</button>
  </div>
  )
  
}
  // const [count,setcount]

  // let fruit="mango";

  // const handleFruit=()=>{
  //   fruit="banana"
  //   console.log(fruit );
    
  
//   return (
//     <div>
//       <h1>{fruit}</h1>
//       <button onClick={handleFruit}>change fruit name</button>
//       <Header></Header>
//   <h1>hello {sum()}</h1>
//   <Fruit></Fruit>
//   <Colour></Colour>
//   <Login></Login>
//   <Profile></Profile>
//   <Settings></Settings>
// </div>
// )



// function Fruit(){
//   return (
//     <h1>Apple</h1>
//   )
// }
// function Colour(){
//   return(
//     <div>
//     <h1>red</h1>
//     <h1>{Userkey}</h1>
//   </div>)
// }
// function sum(){
// return 2+2
// }


export default App;