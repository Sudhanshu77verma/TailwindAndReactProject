import React, { useState } from 'react'

export default function FAQ() {

    const [isopenone,setisopenone] =useState(false)
    const [isopen2,setisopen2] =useState(false)
    const [isopen3,setisopen3] =useState(false)
   



  return (
    <div className='container text-slate-950 font-bold px-2'>
        
        <div className='border  border-blue-400 py-4'>
            <div onClick={()=>setisopenone(!isopenone)} className='flex justify-between px-2 cursor-pointer'>
            <p>Can education flashcards be used for all age groups</p>
             
             <span> {isopenone ? '-':'+'} </span>
             </div>
             {
                isopenone && (
                    <div className='mt-2 p-2'>
                        Yes, Education flashCard can be used for all age groups
                    </div>
                )
             }
        </div>
        <div className='border border-blue-400 py-4 mt-2'>
            <div onClick={()=>setisopen2(!isopen2)} className='flex justify-between px-2 cursor-pointer'>
            <p>How do education FlashCard work</p>
             
             <span> {isopen2 ? '-':'+'} </span>
             </div>
             {
                isopen2 && (
                    <div className='mt-2 p-2'>
                       Flashcards such as this are effective because they promote active recall in the brain, which is the process by which we retrieve a memory
                    </div>
                )
             }
        </div>
        <div className='border border-blue-400 py-4 mt-2'>
            <div onClick={()=>setisopen3(!isopen3)} className='flex justify-between px-2 cursor-pointer'>
            <p>Can education flashcards be used for test Preparation</p>
             
             <span> {isopen3 ? '-':'+'} </span>
             </div>
             {
                isopen3 && (
                    <div className='mt-2 p-2'>
                        Yes, Education flashCard can be used for test Preparation
                    </div>
                )
             }
        </div>


    </div>
  )
}
