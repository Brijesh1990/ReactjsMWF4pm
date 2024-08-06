import React from 'react'
import AdminHeader from './components/admin/AdminHeader'
import AdminSidebar from './components/admin/AdminSidebar'
import Dashboard from './components/admin/Dashboard'
import AdminFooter from './components/admin/AdminFooter'
export default function AdminLayout() {
  return (
    <div>
        
        {/* admin header */}
        <AdminHeader />
        {/* admin content */}
        <section id="dashboard-content" >
        <div className="container-fluid m-0 p-0">
        <div className="row">
        {/* sidebar */}
        <AdminSidebar />
        {/* dashboard */}
        <Dashboard />
        </div>
        </div>
        </section>
        {/* admin footer */}
        <AdminFooter />
    </div>
  )
}
