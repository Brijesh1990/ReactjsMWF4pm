import React from 'react'

export default function ButtonApp() {
  return (
    <div>
       <button type='button' className='w-1/2 hover:w-full size-48 md:size-full bg-slate-700 text-white text-center '>Create Account</button>


       <div className="md:container md:mx-auto bg-slate-700 text-white mt-6  text-center p-32">
         <h1>This is container</h1>
         <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is </p>
       </div>


<div className="flex flex-row mt-5">
  <div className="basis-1/4 bg-slate-950 text-white m-5">01</div>
  <div className="basis-1/4 bg-red-800 text-white m-5">02</div>
  <div className="basis-1/2 bg-orange-700 text-white m-5">03</div>
</div>
    </div>
  )
}
