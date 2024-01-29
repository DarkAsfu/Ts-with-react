import { useState } from 'react'
import reactLogo from './assets/react.svg'
import UseStateExample from './pages/UseStateExample';
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
        <UseStateExample counter={counter} setCounter={setCounter}/>
    </div>
  )
}

export default App
