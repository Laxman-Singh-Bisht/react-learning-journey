import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [lenght, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const [password, setpassword] = useState("");
  
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = ""
    let char =""
  }, [lenght, numberAllowed, characterAllowed, setpassword])

  


  return (
    <>
   <h1 className='text-4xl text-center text-white bg'>Password Generator</h1>
    </>
  )
}

export default App
