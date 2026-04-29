import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <p className='bg-amber-600'>mooooooooo</p> */}
    <Navbar/>
    <Home/>
    </>
  )
}

export default App
