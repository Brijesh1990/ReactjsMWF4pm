import React from 'react'

function PropsMultipleAccess(props) {
  return (
      <>
       <h1>My name is :{props.name}</h1>  
      </>
  )
}

function Access()
{
    return (
        <>
          {<PropsMultipleAccess name="Babita Fogat" />}

            {<PropsMultipleAccess name="Namita Fogat" />}

            {<PropsMultipleAccess name="Sneha Fogat" />}
        </>
    )
}


export default Access