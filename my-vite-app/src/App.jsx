// App.js
import Counter from "./Counter";
import { useState } from "react";
import Hidingcomp from "./Hidingcom";
import Login, { Profile, Settings, Userkey } from "./userComponent";
import Multiplecondition from "./Mutiplecondition";
import Propuser from "./Propuser";
function App() {
  const [display, setDisplay] = useState(true);
  const [fruit, setFruit] = useState("apple");

  const handleFruit = () => {
    setFruit("banana");
  };

  return (
    <div>
      <h1>Toggle Button</h1>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display ? <Hidingcomp /> : null}

      <h1>State in React</h1>
      <h2>{fruit}</h2>
      <button onClick={handleFruit}>Change Fruit Name</button>

      <Counter />
      <Login />
      <Profile />
      <Settings />
      <Colour />
      <Multiplecondition></Multiplecondition>
    <h1>propuser</h1>
    <Propuser name="aaqib"/>
    </div>
  );
}

// These can be moved to a separate file if needed
function Colour() {
  return (
    <div>
      <h1>Red</h1>
      <h1>{Userkey}</h1>
    </div>
  );
}

// export default App;


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