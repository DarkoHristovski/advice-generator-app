import Advice from './components/Advice.tsx'
import { useState,useEffect } from 'react'

import {fetchAdvice} from './services/fetchServices.tsx'

import './App.css'

function App() {
  const [advice, setAdvice] = useState<[]>([])

  

useEffect(()=>{
  fetchAdvice().then(result=>setAdvice([result.slip]))
},[])

console.log(advice)
  return (
    <main>
   <Advice advice = {advice}/>
    </main>
  )
}

export default App
