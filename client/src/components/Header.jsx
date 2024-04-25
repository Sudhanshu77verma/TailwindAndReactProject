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
   

   <div className='flex items-center  gap-4 md:gap-10'> 
    <Link to={'/'} className='hover:text-blue-950 hover:underline' > Home</Link> 
     
     <Link to={'/FlashCard'} className='text-slate-800 hover:text-blue-950 hover:underline'> FlashCard</Link>

  <Link to={'/contact'}  className='text-slate-800 hover:text-blue-950 hover:underline' > Contact </Link>


  <Link to={'/Faq'} className='text-slate-800 hover:text-blue-950 hover:underline' > FAQ   </Link>
   

   <Link to={'/login'}>
  <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'> Login</button>
  </Link>
    </div>
  
    </div>
   

    </div>

  )
}

export default Header