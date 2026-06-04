import React from 'react'
import Card from './card'

const Herocardarea = () => {

  const user =[{num: 1, status: 'Satisfied', img:'https://images.unsplash.com/photo-1700190827480-d7e272138e14?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {num: 2, status: 'Unserved', img:'https://images.unsplash.com/photo-1616422403639-282145aa3e73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob25lJTIwdXNpbmclMjB3aXRoJTIwb25seSUyMGhhbmRzJTIwdmlzaWJsZXxlbnwwfHwwfHx8MA%3D%3D'},
    {num: 3, status: 'Unbanked', img:'https://plus.unsplash.com/premium_photo-1669125725686-2ddfc68e67ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNlcmlvdXMlMjBtYW4lMjBzaXR0aW5nJTIwYW5kJTIwdXNpbmclMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D'}]

  return (

    <div className="cardarea w-[70%] flex justify-between">

      {user.map(function(elem){      
        return <Card num={elem.num} status={elem.status} img={elem.img}/>
        

      })}
    </div>
  )
}

export default Herocardarea
