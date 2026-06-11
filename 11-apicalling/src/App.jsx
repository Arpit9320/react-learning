import axios from 'axios'
import { useState } from 'react'

const App = () => {

  

  let [dets, setDets] = useState([])
  const getdata = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list');

    setDets(response.data)
    // console.log("this is dets", dets)
  }

  

  return (
    <div>
      <button onClick={getdata}>Get Data</button>

      {dets.map((obj)=>{
        return <img src={obj.download_url} alt="" loading='lazy'  style={{width: '300px', height: '200px', objectFit: 'cover'}}/>
      })}

    </div>

  )

}  

export default App