import React from 'react'
import AdminHeader from './components/admin/AdminHeader'
import SidbarApp from './components/admin/SidbarApp'
import Dashboard from './components/admin/Dashboard'
export default function AdminLayout() {
  return (
   <>

   <AdminHeader />
   {/* <!-- admin main content panel --> */}
    <div className="container-fluid admin-content"> 
    {/* <!-- admin sidebar panel --> */}
    <div className="row">
    <SidbarApp />
    <Dashboard />    

    </div>
    </div>

   </>
  )
}
