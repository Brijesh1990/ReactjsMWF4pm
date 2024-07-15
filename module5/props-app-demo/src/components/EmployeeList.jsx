import React from 'react'
import employee from './Data.jsx'

export default function EmployeeList() {
  return (
    <>
      <h1>Hi</h1>
      {employee && employee.map((row)=>{
         return (

            <>
            <p key={row.id}>{row.id}</p>
            <p key={row.name}>{row.name}</p>
            </>
            
         )

      })}
    </>
  )
}
