//import Users from "./Component/Users"
//import './App.css'
function App() {
  let counter = 15

  const addValue = () =>{  // using arrow function we can use normal function as well.
    console.log("clicked",counter)
    counter = counter + 1
  }
  return (
    
  <>
    <h1>Learn React </h1>
    <h2>Counter Value :{counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <button >decrease Value</button>
  </>
    
  )
}

export default App
