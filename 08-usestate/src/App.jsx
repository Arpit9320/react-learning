import { useState } from "react"


const App = () => {
  
  let [user, setUser] = useState({user: "Arpit", age: "24"});

  let UserChange = () =>{
   let newuser = {...user}
   newuser.user = "Hritik"
   console.log(newuser)
   console.log(user)
   setUser(newuser)
  
  }

  return (
    <div>
      <h1>{user.user}, {user.age}</h1>
      <button onClick={UserChange}>Click</button>
    </div>
  )
}

export default App
