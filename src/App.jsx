import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchData from './Search'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 style={{ color: 'blue', fontSize: "50px", fontFamily: "sans-serif", lineHeight: "20px" }}>Hello Everyone</h1>
      <a href='https://www.w3schools.com/' target="_blank" style={{ background: "green", color: "white", fontFamily: "sans-serif", padding: "15px 30px", borderRadius: "20px" }}>Click here</a>
      <div>
        <h2>We are working together</h2>
        <p>we will achive good things in upcoming days!!</p> */}

        <SearchData />
      {/* </div> */}
    </>
  )
}

export default App
