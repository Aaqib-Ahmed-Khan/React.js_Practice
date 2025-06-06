import Header from "./header"
function App(){
  return (
    <div>
      <Header></Header>
  <h1>hello {sum()}</h1>
  <Fruit></Fruit>
  <Colour></Colour>
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
    <h1>red</h1>
  )
}
function sum(){
return 2+2
}
export default App;