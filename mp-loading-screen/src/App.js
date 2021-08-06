import { useState, useEffect } from 'react'
import './App.css';
import AnimatedIcon from './components/animatedIcon';


function App() {

  const [loading, setloading] = useState(false)

  useEffect(() => {
    setloading(true)
    setTimeout(() => {
        setloading(false)
    }, 7000)
  }, [])

  return (
    <div className="App">
      {
        loading ?

        <AnimatedIcon />

        :

        <h1>Wellcome to MP</h1>

      }
    </div>
  );
}

export default App;
