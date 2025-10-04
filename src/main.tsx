import  { StrictMode } from 'react'
//import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

//Creating Element without using react function.

// const element = (
//   <a href='https://google.com' target='_blank' >VisitMe</a>
// )

//Creating Element with using react function acc to react in which we can't change it.

// const anotherElement = React.createElement(
//   'a', //tag
//   {href:'https://goggle.com', target:'_blank'}, // attribute in object
//   "click Me To visit google" // text
// )
 
createRoot(document.getElementById('root')!).render(

  // element // render without react function(uncomment const = element code )
  // anotherElement // render with react function
  <StrictMode>
    <App></App>
  </StrictMode>
    
)

