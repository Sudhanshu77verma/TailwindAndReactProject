import React, { useState } from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import { GoHome } from "react-icons/go";
import logo from '../images/logoimage.png'
import FlashCard from './FlashCard';
import { IoMdAddCircle } from "react-icons/io";
import { IoReloadOutline } from "react-icons/io5";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { MdFullscreen } from "react-icons/md";
import { Link } from 'react-router-dom';
import FAQ from './FAQ';
export default function Home() {

    const [currentFlashCard,setcurrentFlashCard]= useState(0);
    const  FlashCards=[
      
        {
            equation: '9 + 6 + 7x - 2x - 3',
        },
        {
            equation: '9 + 6 + 8x - 2x - 3',
        },
        {
            equation: '9 + 6 + 3x - x - 3',
        },
        {
            equation: '9 + 6 + 9x - 4x - 3',
        },
        {
            equation: '9 + 6 + 5x - 3x - 3',
        },
        {
            equation: '9 + 6 + x - 6x - 3',
        },
        {
            equation: '9 + 6 + x - 6x - 3',
        },
        {
            equation: '9 + 6 + x - 6x - 3',
        },
        {
            equation: '9 + 6 + x - 6x - 3',
        },
        {
            equation: '9 + 6 + x - 6x - 3',
        },

    ]

    const length=FlashCards.length
    console.log(length)

   

    const handlenextFlashcard=()=>{
         
        if(currentFlashCard  ===length-1)
        {
           setcurrentFlashCard(0)
           return ;
        }
     
         if(currentFlashCard<length)
         {
            setcurrentFlashCard((prev)=>prev+1)
         }
      
    }

    const handlepreviousFleshCard=()=>{
        if(currentFlashCard>1)
        {
            setcurrentFlashCard((prev)=>prev - 1)
        }
       if(currentFlashCard === 0)
        {
            setcurrentFlashCard(0)
        }
        
    }
  return (
    <div className= ' mx-auto mt-7 ml-3 h-screen '>
        
    <div className='flex flex-row items-center'>
       
       <GoHome className='text-slate-500 text-3xl '></GoHome>
      < MdOutlineNavigateNext className='text-slate-800 text-xl'></MdOutlineNavigateNext>
      <p className=' text-slate-500'>Mathematics</p>
      < MdOutlineNavigateNext className='text-slate-800 text-xl'></MdOutlineNavigateNext>
      <p className=' text-blue-800 '>Relation and Function</p>


    </div>


    <div className='mt-5'>
        <h1 className='text-2xl font-semibold text-blue-800'>  Relations and Functions (Mathematics) </h1>
    </div>

    <div className='flex justify-center items-center mt-8'>
      
      <ul className='flex text-slate-500 items-center gap-10 hover:cursor-pointer   '>
        <li className='hover:underline  hover:text-blue-800'   > Study  </li>
        <li className='hover:underline'  > Quiz </li>
        <li className='hover:underline' > Test </li>
        <li className='hover:underline' > Game </li>
        <li className='hover:underline' > Others </li>
      </ul>
   
    </div>

    <div className='  flex flex-col justify-center items-center mt-4 gap-5 '>  
      <div className=' w-96 h-52  bg-gradient-to-r from-blue-500  to-blue-800 rounded-3xl flex justify-center items-center ' >
      <FlashCard className="  " equation={FlashCards[currentFlashCard].equation} >

      </FlashCard>
      </div>
  
     
      <div className='flex flex-row justify-between items-center gap-10 '>

        <p onClick={()=>setcurrentFlashCard(0)}> 
        <IoReloadOutline className='text-blue-500 text-xl'></IoReloadOutline> </p> 
         <FaArrowCircleLeft onClick={handlepreviousFleshCard} className='text-blue-900 text-2xl' ></FaArrowCircleLeft>
         <p> 
            {  length && 
                currentFlashCard < length ? (`0${currentFlashCard}`):(`${currentFlashCard}`)
            }
            {
                `/${length}`
            }
         </p>
         <FaArrowCircleRight className='text-blue-900 text-2xl' onClick={handlenextFlashcard}></FaArrowCircleRight>

        <MdFullscreen className='text-xl text-blue-500'></MdFullscreen>

      </div>
     </div>

     <div className='flex flex-row justify-between items-center mt-8'>

    
    <div className='flex gap-6 '>
     <img src={logo} className='rounded-full shadow-md shadow-slate-600 w-14 h-14 ' alt="" />
     <div>
        <p className='font-thin text-xs'> Published by</p>
        <p className='text-2xl'> Hygge<span className='font-semibold text-3xl'>X</span></p>
     </div>
    </div>



    <div className='flex items-center gap-3 '>
    <IoMdAddCircle className='text-xl text-blue-900'></IoMdAddCircle>
    <Link to={'/FlashCard'}  >
     <div className='text-blue-800 text-xl'>
        Create Flashcard
     </div>

    </Link>
    </div>




     </div>
      
      <div className='mt-10 flex flex-col gap-5 '>
        <h1 className='text-3xl font-bold text-blue-800 mb'>FAQ</h1>
        
        <div className=''>
        <FAQ>
         </FAQ>
      
        </div>
      
      </div>


    </div>
  )
}
