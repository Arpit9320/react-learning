import React, { useState } from 'react'

const App = () => {

  let [task, setTask] = useState(JSON.parse(localStorage.getItem("notes")) || [{heading: "create your note", description: ""}])

  let [title, setTitle] = useState('')
  let [desc, setDesc] = useState('')

  const formhandler = (dets)=>{
    dets.preventDefault();

    let copyTask = [...task]

    copyTask.push({heading:title, description:desc })

    setTask(copyTask)

    

    setTitle('')
    setDesc('')
  }

  const deleteNote = (idx) =>{
    let copyTask = [...task]

    copyTask.splice(idx, 1)

    setTask(copyTask)

    localStorage.setItem("notes", JSON.stringify(task))

  }

  localStorage.setItem("notes", JSON.stringify(task))
  
  return (
    <div className=' min-h-screen bg-black w-full lg:flex text-white '>

      <form className='lg:w-1/2 flex flex-col p-10 gap-8 items-center lg:border-b-0 border-b-2' onSubmit={(dets)=>{
        formhandler(dets)
      }}>

        <h2 className='text-2xl font-bold text-center'>Add Notes</h2>

        <input type="text" required placeholder='Enter title...' className=' border-2 border-white rounded-[10px] px-6 py-6 outline-none w-[90%]'
          value={title}
          onChange={(dets)=>{
            setTitle(dets.target.value)
          }}
        />

        <textarea placeholder='Enter description...' className='text-area border-2 border-white rounded-[10px] px-6 py-2 outline-none max-h-100 min-h-40 w-[90%]'
          value={desc}
          onChange={(dets)=>{
            setDesc(dets.target.value)
          }}
        ></textarea>

        <button className='border-2 border-white rounded-[10px]  py-2 w-40 cursor-pointer '>Add Note</button>

      </form>

      <div className='lg:border-l-2 lg:w-1/2 lg:py-10 lg:px-5 py-5'>

        <h2 className='text-2xl font-bold text-center'>Recent Notes</h2>

        <div className= 'card-holder flex items-start flex-wrap lg:justify-start justify-center gap-5.5 mt-4 lg:h-151 lg:overflow-auto'>


          {task.map(function(obj, idx){

            return <div key = {idx} className=" relative w-40 h-52 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
            <h3 className='leading-tight text-lg font-bold'>{obj.heading}</h3>
            <p className='leading-tight text-xs font-semibold text-gray-600'>{obj.description}</p>

            <div>
              <button className='absolute bottom-0 right-0 w-fit border-none cursor-pointer px-2 bg-red-500 py-1 text-xs rounded font-bold'
                onClick={() =>
                  
                  deleteNote(idx)
                } 
              >Delete</button>
            </div>
            
          </div>
          
          })}

          

        </div>

      </div>
      
    </div>
  )
}




export default App
