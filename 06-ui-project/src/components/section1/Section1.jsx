import Navbar from './navbar'
import Herosection from './Herosection'


const Section1 = (props) => {

  return (
    <div className="section1 h-screen w-full flex flex-col bg-[#efefef]" >

      <Navbar />
        
      <Herosection users = {props.users}/>
      
    </div>
  )
}

export default Section1
