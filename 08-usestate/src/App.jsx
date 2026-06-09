import { useState } from "react"


const App = () => {
  
  let [num, setNum] = useState(0);

  function increase(){
    num++
    setNum(num)
  }
  function decrease(){
    num--
    setNum(num)
  }
  function jump(){
    
    setNum(num+5)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={jump}>Increase by 5</button>
    </div>
  )
}

export default App
