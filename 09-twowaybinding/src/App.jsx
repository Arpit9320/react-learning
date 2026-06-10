import React, { useState } from 'react'

const App = () => {

    const formhandler = (e) =>{
        e.preventDefault();
        console.log("form submitted by", Title)
        setTitle('')
    }

    let [Title , setTitle] = useState('')


  return (
    <div>
      <form onSubmit={(e) =>{
        formhandler(e)
      }}>
        <input type="text" placeholder='Enter you name' value={Title}
            onChange={(dets) =>{
                setTitle(dets.target.value)
            }}
        />


        <button>Submit</button>
      
      </form>
    </div>
  )
}

export default App
