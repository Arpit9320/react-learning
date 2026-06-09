import { RiArrowRightLine } from "@remixicon/react";


const Card = (props) => {
  return (
    
    <div className="card w-[31%] h-full rounded-[35px] py-6 px-6 flex shrink-0 flex-col justify-between bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${props.img})` }}>

          <div className="number w-[15%] h-[8%] bg-[rgb(229,229,229)] rounded-[50%] flex items-center justify-center font-bold ">{props.id + 1}</div>

          <div>
            <p className='text-[1.6rem] font-light mb-10 leading-[1.2] text-white text-shadow-2xs' >Prime customers, that have access to prime credits and are satified with the current products</p>
            
            <div className='status flex justify-between items-center'>
            <h4 className="statusDiv bg-[rgb(71,129,255)] text-white px-3.75 py-1.25 rounded-[20px] font-semibold text-[1.2rem]">{props.status}</h4>
            < RiArrowRightLine size={36} className="bg-[rgb(71,129,255)] text-white p-2.5 rounded-full h-fit" />
            </div>
            
          </div>

    </div>

  )
}

export default Card
