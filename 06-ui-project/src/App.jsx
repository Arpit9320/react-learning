import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

const App = () => {

  const user =[
    {  
      status: 'Satisfied',
      img:'https://plus.unsplash.com/premium_photo-1664474727838-149ae5372ced?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8'
    },
    { 
      status: 'Unserved', 
      img:'https://images.unsplash.com/photo-1700386968631-e62838359a6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8'
    },
    { 
      status: 'Unbanked', 
      img:'https://plus.unsplash.com/premium_photo-1683880731020-83b984105a72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVuJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D'
    },
    { 
      status: 'Unvalued', 
      img:'https://images.unsplash.com/photo-1600791579629-74ce11c69bf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8'
    },
    { 
      status: 'Covered', 
      img:'https://plus.unsplash.com/premium_photo-1724634778361-53d823f0aed3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8'
    },
    { 
      status: 'Fulfilled', 
      img:'https://images.unsplash.com/photo-1545184180-25d471fe75eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D'
    }
  ]


  return (
    <>
      <Section1 users = {user}/>

      <Section2 />
      
    </>
  )
}

export default App
