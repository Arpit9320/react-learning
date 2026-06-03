import Card from './components/card'

const App = () => {

  const userarr = [{
    user: 'Hritik Srivastava',
    age: 24,
    img: 'https://images.unsplash.com/photo-1616645004064-aebe96923cbb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    user: 'Aman Singh',
    age: 22,
    img: 'https://images.unsplash.com/photo-1779952369141-319d17bd03eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    user: 'Narendra Modi',
    age: 80,
    img: 'https://images.unsplash.com/photo-1779571331215-0a26a39caa35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTR8fHxlbnwwfHx8fHw%3D'
  },
  {
    user: 'Rahul Gandhi',
    age: 50,
    img: 'https://images.unsplash.com/photo-1773332585815-f106a5d6ed6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D'
  }]

  return (
    <div className='parent'>
      
      {userarr.map(function(elem){
        return <Card img={elem.img} age={elem.age} user={elem.user} />
      })}

    </div>
  )
}

export default App