import React from 'react'
import { BiUser,BiMailSend,BiMobile,BiMapPin,BiLogoFacebook,BiLogoInstagram,BiLogoYoutube } from 'react-icons/bi'
import hitesh from './assets/images/brijesh.jpg'
export default function PortFolioApp() {
return (
<div>
{/* content start here */}
<div className='container p-10'>     
<div className="flex">
<div className="flex-none w-50 text-white p-10 ms-52 mt-12">
<p><button className='bg-lime-500 m-0 p-3 w-40 rounded-t-3xl rounded-r-2xl animate-bounce'>Hello i am</button></p>
<p className='text-white font-extrabold text-2xl mt-4 animate-pulse'>Brijesh Kumar Pandey</p>
<p className='txt-white'>Products Developer</p>
<h4 className='mt-3 flex'><BiMailSend className='mt-1' /> &nbsp;&nbsp; <a href=''>info@hr.com</a></h4>

<h4 className='mt-3 flex'><BiMobile className='mt-1' /> &nbsp;&nbsp; (+91)-9998003879</h4>
<h4 className='mt-3 flex'><BiMapPin className='mt-1' /> &nbsp;&nbsp; 150 feet ring road Rajkot-360005</h4>

<h4 className='mt-3 flex'><BiLogoFacebook className='ml-10 text-4xl text-blue-700 animate-bounce' /> &nbsp;&nbsp;<BiLogoInstagram className='text-4xl text-red-300 animate-bounce' />&nbsp;&nbsp;<BiLogoYoutube className='text-4xl text-red-600 animate-bounce' /></h4>
</div>
<div className="flex-initial w-50 text-white p-10 ms-5 mt-16">
<img src={hitesh} alt="users" className='w-56 h-56 rounded-full border border-8 border-spacing-36  border-slate-500' />
</div>

</div>

</div>
</div>
)
}
