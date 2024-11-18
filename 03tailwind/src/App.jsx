import { useState } from 'react'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "aayush",
    age: 18
  }
  let newArr = [1,2,3]
  return (
    <>
      <h1 className='text-4xl bg-blue-400 text-black rounded p-4 '>kakee oyyeee</h1>
      <Cards username="Macbook air" btnText="click to know more"></Cards>
      <Cards username="Lenovo India"  ></Cards>

    </>
  )
}

export default App
