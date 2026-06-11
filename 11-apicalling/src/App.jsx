import { useState } from 'react'

const App = () => {

  const getdata = async () =>{
    
    const reponse = await fetch('https://jsonplaceholder.typicode.com/todos')
    const dets = await reponse.json()
    console.log(dets)

  }




  return (
    <div>
      <button onClick={getdata}>Get Data</button>
    </div>

  )

}  

export default App