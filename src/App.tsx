import { useState } from 'react'
import reactLogo from './assets/react.svg'
import UseStateExample from './pages/UseStateExample';
import UseStateExample2 from './pages/UseStateExample2';
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
        <UseStateExample counter={counter} setCounter={setCounter}/>
        <UseStateExample2/>
    </div>
  )
}

export default App
