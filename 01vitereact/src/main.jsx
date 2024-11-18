import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <>
    <h1> web dev</h1>
    </>
  )
}
const anotherElement = (
  <a href="https://google.com" target = '_blank'>visit google</a>
)
const anotherUser = " chai aur react"
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'click me to visit google',
  anotherElement
)
ReactDom.createRoot(document.getElementById('root')).render(
  reactElement
)
