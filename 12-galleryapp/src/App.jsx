import axios from 'axios'
import { useEffect, useState } from 'react'
import Cards from './components/Cards'

const App = () => {

  let [userData, setUserdata] = useState([])

  let [index, setIndex] = useState(1)


  const getData = async ()=>{
    const reponse = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`)    
    setUserdata(reponse.data)
  }

  useEffect(function() {
      getData()
  }, [index])

  let renderUI = <h3 className='text-white text-2xl absolute top-1/2 left-1/2 translate-[-50%]'>Loading...</h3>

  if(userData.length > 0){
    renderUI = userData.map((obj, idx)=>{
      return(
        <Cards obj={obj} key={idx}/>
      )
    })
  }

  return (
    <div className='h-screen overflow-auto bg-black text-white'>

      <div className='flex lg:flex-row flex-col justify-center gap-4 items-center mt-8 border-b-2 border-white pb-4'>
        <button style={{opacity: index==1?0.6:1}} className='bg-amber-700 px-6 py-3 rounded-xl text-[15px] font-semibold cursor-pointer active:scale-95'
        onClick={()=>{
          if(index > 1){
            setIndex(index-1)
          }
          
        }}
        >Prev</button>

        <h3>Page {index}</h3>

        <button className='bg-amber-700 px-6 py-3 rounded-xl text-[15px] font-semibold cursor-pointer active:scale-95'
        onClick={()=>{
          setIndex(index+1)
        }}
        >Next</button>

      </div>
      {/* <h2 className='fixed text-2xl'>{index}</h2> */}
      <div className='flex min-h-[80%] flex-wrap gap-4 px-15 py-10 lg:py-8 justify-between items-center'>{renderUI}</div>
    
    </div>
  )
}

export default App



