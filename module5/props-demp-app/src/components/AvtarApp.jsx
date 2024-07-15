import React from 'react'
function AvtarApp(props) {
  return (
    <>
     <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
     
    />
     <h3>Name of users is {props.name}</h3>
     <h3>Age  of users is {props.age}</h3>
     <h3>Address  of users is {props.address}</h3>
    </>
  )
}

function Avatar()
{
    return (
  <AvtarApp name="valley" age="34" address="150 feet ring road rajkot" />
 )
}

export default Avatar;
