import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
return (
<div>
<div className='row'>
<div className='col-md-4'>
<img src='https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif' alt='img' className='img-fluid' />
</div>
<div className='col-md-7 ms-0'>
<h2 className='text-center mt-5'>Page in Not Found 404 errors</h2> 
<p className='text-center'><Link to="/"><button type='button' className='btn btn-md btn-dark text-white'>Click to Go Home Page</button></Link></p> 
</div>
</div>
</div>
)
}
