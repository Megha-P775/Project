import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchData from './Search'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchData />
    </>
  )
}

export default App
