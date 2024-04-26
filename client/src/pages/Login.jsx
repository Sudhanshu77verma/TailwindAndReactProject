import React, { useState } from 'react'
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function Login() {

   const navigate =useNavigate();
    const [formdata,setformdata] =useState({});

    const [showpassword,setshowpassword] = useState(true);
  //  console.log(formdata)

    const handlechange=(e)=>{
        setformdata({
          ...formdata,
          [e.target.id]:e.target.value,
        });
    };
     
    const handleSubmit = async(e)=>{

        e.preventDefault();
  
        try{
      
          const res=  await fetch('/api/auth/signin',
        {
            method:'POST',
            headers:{
              'Content-Type':'application/json',
            },
            body: JSON.stringify(formdata),
         
      
          });
    
          const data= await res.json();
            if(data.success==false)
            {
           
               toast.error("Error")
            }
           else {
            toast.success("SignIn successfully")
            navigate('/')
           }
      
           
        }
       catch(error)
       {
       console.log(error)
      
       }
         
      };
     
  
  return (
    <div >
         <div className='p-3 max-w-lg mx-auto shadow-lg shadow-slate-800  mt-10' >
    
    <h1 className='text-3xl text-center font-semibold my-7 '>  Sign In </h1>
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
  <input type="email" placeholder='email' className='border p-3 rounded-lg ' id='email' onChange={handlechange} />
  <div className=' flex relative'>

  <input type={showpassword ? ("type"):("password")} className='border p-3 rounded-lg w-full' placeholder='password' id="password" onChange={handlechange}/>
 
 <button type ="button" onClick={()=>setshowpassword(!showpassword)}>
 {
    showpassword ? (<FaRegEyeSlash className='absolute right-5 top-5'></FaRegEyeSlash>):(<FaEye className='absolute right-5 top-5'></FaEye>)
  }
 </button>
  </div>

    

    <button  className='  bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 '>
     sign in </button>

       
   </form>


  <div className='flex flex-row gap-2 mt-5'>
    <p> Don't have an account ?</p> 
    <Link to={'/sign-up'}>
      <span className='text-blue-700'> Sign up</span>
    </Link>
  </div>

    </div>
    </div>
  )
}

export default Login