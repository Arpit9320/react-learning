const Cards = (props) => {

  return (
    <div style={{userSelect:"none"}}>
      <a href={props.obj.url} target='_blank'>
        <div className='h-40 w-44 overflow-hidden rounded-xl'>
            <img src= {props.obj.download_url} alt="" className='w-full h-full object-cover' loading='lazy' />
        </div>
            <h3 className='text-xl'>{props.obj.author}</h3>
        </a>
    </div>
  )
}

export default Cards
