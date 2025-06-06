import Header from "./header"
import Login,{Profile,Settings, Userkey} from "./userComponent"
function App(){
  return (
    <div>
      <Header></Header>
  <h1>hello {sum()}</h1>
  <Fruit></Fruit>
  <Colour></Colour>
  <Login></Login>
  <Profile></Profile>
  <Settings></Settings>
</div>
)


}
function Fruit(){
  return (
    <h1>Apple</h1>
  )
}
function Colour(){
  return(
    <div>
    <h1>red</h1>
    <h1>{Userkey}</h1>
  </div>)
}
function sum(){
return 2+2
}


export default App;