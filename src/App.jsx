import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Even from './components/Even'
import ToggleMessage from './components/ToggleMessage'
import UserCard from './components/UserCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <UserCard name = "pranusha" email = "pranushak87@gmail.com" age={35} />
    <UserCard name = "Risha" email = "pranushak87@gmail.com" age={8} /> */}

    <Counter />
    </>
  )
}

export default App
