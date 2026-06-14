import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex items-center justify-center gap-4 py-4'>
        <Link className="text-xl underline" to={"/product/mens"}>Mens</Link>
        <Link className="text-xl underline" to={"/product/womens"}>Womens</Link>
        <Link className="text-xl underline" to={"/product/kids"}>Kids</Link>
      </div>
      
      <Outlet />
    </div>
  )
}

export default Product
