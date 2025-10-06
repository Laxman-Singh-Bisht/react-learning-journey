//import Users from "./Component/Users"
//import './App.css'
import { useState } from "react"
import Card from "./Component/Card"
function App() {
  const [counter, setCounter] = useState(15)


  const addValue = () =>{  // using arrow function we can use normal function as well.
    if(counter <= 19){   // Used to that Add Value never be more than 20   
      setCounter(counter+1)
      setCounter(counter => counter+1)
    }
    
   }

  const removeValue = () =>{
    if(counter >=1 ){    // Used to that Remove Value never be less than 0
      setCounter(counter-1)
    }
  }

  return ( 
  <>
    <h1 className="bg-green-400 text-black p-4 rounded-xl">Learn props </h1>
    
    <h2>Counter Value :{counter}</h2>
    <button onClick={addValue}>Add Value{counter}</button>
    <br/>
    <button onClick={removeValue} >Remove Value {counter}</button>
    <p>footer: {counter}</p> 
    <Card Price="$10" SerialNo="1"></Card>
    <Card Price="$20" SerialNo="2"></Card>    
  </>
    
  )
}

export default App
