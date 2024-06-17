import React from 'react'
import AdminHeader from './AdminHeader'
import SidbarApp from './SidbarApp'
export default function AddBlogs() {
  return (
    <>
  <AdminHeader />
   {/* <!-- admin main content panel --> */}
    <div className="container-fluid admin-content"> 
    {/* <!-- admin sidebar panel --> */}
    <div className="row">
    <SidbarApp />
    
<div className="col-md-8 ms-5 p-2 mt-5 shadow">
<div className="row">
  <div className='p-5 w-75'>
  <h3>Add Blogs here</h3>
    <form>
        <div className='form-group mt-4'>
            <input type='text' placeholder='Blog Title' className='form-control' />
        </div>

        <div className='form-group mt-4'>
            <input type='file' placeholder='Blog Title' className='form-control' />
        </div>
        <div className='form-group mt-4'>
            <textarea type='text' placeholder='descriptions' className='form-control'></textarea>
        </div>

        <div className='form-group mt-4'>
            <input type='date' placeholder='Addded date' className='form-control' />
        </div>

        <div className='form-group mt-4'>
            <input type='submit' value="Added Blogs"  className='btn btn-md btn-dark text-white bg-dark' />
        </div>
    </form>
    </div>

    </div>
    </div>    

    </div>
    </div>
    </>
  )
}
