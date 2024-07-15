import React from 'react'
import Button from './Button'
import '../index.css'
const Header=({showForm,changeTextAndColor})=>{

  return (

    <header className='header p-2'>
    <h2>Task Manager App <Button  onClick={showForm} color={changeTextAndColor ?'red':'green'} text={changeTextAndColor ? 'Close':'Add'} className="ms-5 btn-clk" />  </h2>
    
    </header>
  )

}

export default Header
