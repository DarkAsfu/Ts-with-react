import { useState } from 'react'
import reactLogo from './assets/react.svg'
import UseStateExample from './pages/UseStateExample';
import UseStateExample2 from './pages/UseStateExample2';
import UseReducer from './pages/UseReducer';
import UseEffectExample from './pages/UseEffectExample';
import UseEffectCleanUp from './pages/UseEffectCleanUp';
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App w-10/12 mx-auto text-center p-10">
        {/* <UseStateExample counter={counter} setCounter={setCounter}/> */}
        {/* <UseStateExample2/> */}
        {/* <UseReducer/> */}
        {/* <UseEffectExample/> */}
        <UseEffectCleanUp/>
    </div>
  )
}

export default App
