import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
  function clickMe1 (){
    alert('Click 1 is clicked')
  }
  const clickMe2 = () =>{
    alert('click 2 is Clicked')
  }
  const clickMe3 = (num) =>{
    alert(num + 3)
  }
 
  return (
    <>
      
      <h3>React Core Concept</h3> 

      <Friends></Friends>

      <Users></Users>

      <Team></Team> 



      <Counter></Counter>






      <button onClick={clickMe1}>Click 1</button>
      <button onClick={clickMe2}>Click 2</button>
      <button onClick={() => {alert('Click 3 is clicked')}}>Click 3</button>
      <button onClick={() => clickMe3(5)}>Click 4</button>
      
      
    </>
  )
}

export default App
