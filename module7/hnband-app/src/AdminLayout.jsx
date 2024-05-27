import React from 'react'
import AdminHeader from './components/admin/AdminHeader'
import SidebarApp from './components/admin/SidebarApp'
import Dashboard from './components/admin/Dashboard'
export default function AdminLayout() {
  return (
   <>

   <AdminHeader />
   {/* <!-- admin main content panel --> */}
    <div className="container-fluid admin-content"> 
    {/* <!-- admin sidebar panel --> */}
    <div className="row">
    <SidebarApp />
    <Dashboard />    

    </div>
    </div>

   </>
  )
}
