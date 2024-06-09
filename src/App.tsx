import Advice from './components/Advice.tsx';
import { useState,useEffect } from 'react';
import {fetchAdvice} from './services/fetchServices.tsx';
import './App.css';

type AdviceObject = {
  id: number;
  advice: string;
}

type AdviceSlip= {
  slip: AdviceObject;
}

function App() {
  const [advice, setAdvice] = useState<AdviceObject>()

  const addAdvice = () => {
    return fetchAdvice().then((result: AdviceSlip)=> {
      setAdvice(result.slip);
    })
   }

  useEffect(()=> {
    addAdvice();
  }, [])

  return (
    <main>
      <Advice addAdvice={addAdvice} adviceObject={advice}/>
    </main>
  )
}

export default App;
