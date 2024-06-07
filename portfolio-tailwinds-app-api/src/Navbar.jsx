import React from 'react'

export default function Navbar() {
  return (
    <div>
       {/* navbar or header */}
    <div className='container shadow-md shadow-slate-700 p-2'>
    <ul className='text-white flex p-2 space-x-16 items-center ml-40'>
        <li className=''><a href='/'>Home</a></li>
        <li><a href='/about-us'>About</a></li>
        <li><a href='/our-skills'>Skills</a></li>
        <li><a href='/our-experience'>Experience</a></li>
        <li><a href='/portfolio'>Portfolio</a></li>
        <li><a href='/pricing'>Pricing</a></li>
        <li><a href='/our-blogs'>Blog</a></li>
        <li><a href='/contact-us'>Contact</a></li>
      </ul>
    </div>
    </div>
  )
}
