import Card from './card'

const Herocardarea = (props) => {

  console.log(props.users)

  return (

    <div className="cardarea w-[70%] flex flex-nowrap overflow-x-auto gap-4 justify-between" id='cardHolder'>

    {props.users.map(function(elem, idx){
      return <Card status = {elem.status} img = {elem.img} key = {idx} id = {idx} />
    })}

    </div>
  )
}

export default Herocardarea
