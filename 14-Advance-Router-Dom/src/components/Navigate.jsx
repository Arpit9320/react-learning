import { useNavigate } from "react-router-dom"


const Navigate = () => {

    const navigate = useNavigate()

  return (
    <div className="flex gap-2 bg-cyan-700 py-2 px-5">
        <button className="font-medium active:scale-95 bg-amber-500 px-4 py-1.5 rounded " 
        onClick={()=>{
          navigate('/')
        }}
        >Return to Home</button>

        <button className="font-medium active:scale-95 bg-amber-500 px-4 py-1.5 rounded " 
        onClick={()=>{
          navigate(-1)
        }}
        >Back</button>

                <button className="font-medium active:scale-95 bg-amber-500 px-4 py-1.5 rounded" 
        onClick={()=>{
          navigate(+1)
        }}
        >Next</button>
    </div>
  )
}

export default Navigate
