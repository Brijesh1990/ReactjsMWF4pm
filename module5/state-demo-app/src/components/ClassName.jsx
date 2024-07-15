import React, { Component, useState } from "react";
class Name extends Component
{
    render()
    {
        const[name,setName]=useState("Brijesh Kumar Pandey")
        return (

            <>

                <h1>Employee name is : {name}</h1>
            </>
        )
    }
}

export default Name