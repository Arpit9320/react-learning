import Herotextarea from './Herotextarea'
import Herocardarea from './Herocardarea'

const Herosection = (props) => {
  return (
    <div className="herosection flex flex-1 w-full gap-[5%] pt-5 pl-18 pb-8 pr-2">
    
      <Herotextarea />

      <Herocardarea users = {props.users}/>
      
    </div>
  )
}

export default Herosection
