import React from 'react'
import logo from '../images/logoimage.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className=' h-14'>
        

<div className='container max-w-full flex flex-row justify-between items-center mt-3 gap-8  md:gap-40  md:px-9 '>
     
<Link to={'/'}>
    <div className='flex items-center gap-2'>

     
       <img src={logo} className='w-12 h-10' alt=""  />
        <div className='flex justify-center items-center '>
        <p className='text-xl text-blue-800  '>Hygge  </p> 
         <span className='font-semibold text-2xl text-blue-950'>X</span>
        </div>
    </div>
</Link>
   

   <div className=' text-lg text-slate-950 flex  items-center  gap-2 md:gap-10'> 
    <Link to={'/'} className='hover:text-blue-950 hover:scale-110' > Home</Link> 
     
     <Link to={'/FlashCard'} className=' hover:text-blue-950 hover:scale-110'> FlashCard</Link>

  <Link to={'/contact'}  className=' hover:text-blue-950 hover:scale-110' > Contact </Link>

  
  <Link to={'/Faq'} className=' hover:text-blue-950 hover:scale-110' > FAQ   </Link>
   

   <Link to={'/login'}>
  <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'> Login</button>
  </Link>
    </div>
  
    </div>
   

    </div>

  )
}

export default Header