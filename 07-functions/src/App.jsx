import React from 'react'

const App = () => {

  function scrolltrigger(dets){
    if(dets>0){
      console.log("Positive")
    } else console.log("Negative")
  }

  return (
    <div >
      <div className="section1" onWheel={(elem) => {
        scrolltrigger(elem.deltaY)
      }} ></div>
      <div className="section2"></div>
    </div>
  )
}

export default App
