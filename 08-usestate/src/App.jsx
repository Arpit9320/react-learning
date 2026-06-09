import { useState } from "react"


const App = () => {
  
  let [user, setUser] = useState({user:"Kamlesh", age: "40"});

  let UserChange = () =>{
    setUser(prev=>({...prev, age:60}))
  
  }

  return (
    <div>
      <h1>{user.user}, {user.age}</h1>
      <button onClick={UserChange}>Click</button>
    </div>
  )
}

export default App
