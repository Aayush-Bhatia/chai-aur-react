import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(5)

  const addValue = () => {
    console.log("clicked",count);
    setCount(count + 1)
    if(count=>20){
      setCount(20)
    }
  }
  const removeValue = () => {
    setCount(count - 1)
    if(count<=0){
      setCount(0)
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>count value: {count}</h2>
      <button
      onClick={addValue}
      >add value {count}</button>
      <br />
      <button
      onClick={removeValue}
      >remove value {count}</button>
    </>
  )
}

export default App
