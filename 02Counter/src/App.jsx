import { useState } from 'react'


function App() {
  let [counter, setCounter] = useState(0);
  const addValue = ()=>{
    setCounter((prev) => prev+1);
    console.log("After Adding 1: " , counter)
  }
  const subValue = ()=>{
    setCounter((prev)=>prev-1);
    console.log("After Subtracting 1: " , counter); 
  }
  const resetValue = ()=>{
    setCounter(0);
  }
  return (
    <>
      <h1>Chai Aur Saurabh</h1>
      <h3>Counter Value:{counter}</h3>
      <button onClick={addValue} disabled={counter >= 20}>Add Value</button>
      <p>After Adding 1: {counter}</p>
      <br></br>
      <button onClick={resetValue}>Reset</button>
      <br></br>
      <button onClick={subValue} disabled = {counter<=0}>Sub Value:{counter}</button>
      <p>After Subtracting 1: {counter}</p>
    </>
  )
}

export default App
