import { useState } from 'react'
import './App.css'
import Events from './components/Events'
import States from './components/States'
import Students from './components/Students'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Events/>
     <States/>
     <Students/>
    </>
  )
}

export default App
