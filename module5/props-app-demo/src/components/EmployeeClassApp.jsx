import React, { Component } from "react";
class Employee extends Component
{
    render(props)
    {
        return (
            <>
              <h1>My name is {this.props.name}</h1>
            </>
        )

    }
}

export default Employee