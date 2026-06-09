import { useState } from "react"


const App = () => {
  
  let [user, setUser] = useState([10, 20, 30, 40]);

  let UserChange = () =>{
    let newuser = [...user]
    newuser.pop()
    setUser(newuser)
    console.log(newuser)
    console.log(user)
  
  }

  return (
    <div>
      <h1>{user}</h1>
      <button onClick={UserChange}>Click</button>
    </div>
  )
}

export default App
