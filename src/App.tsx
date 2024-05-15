import { useState } from 'react'
import Watercal from './components/Watercal'
import './Apps.css'
import { Toggle } from './components/Toggle';


function App() {
const [dark,setDark] = useState(true);
  return (
   
    <div className='app' data-theme={dark ? "dark" : "light"}>
       <Toggle 
       isChecked={dark}
       handleChange={() => setDark (!dark)}/>
       
  <Watercal />
    </div>
  )
}

export default App
