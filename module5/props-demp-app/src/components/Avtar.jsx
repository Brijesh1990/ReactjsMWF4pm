import React from 'react'
import { getImageUrl } from './utils'

export default function Avtar({ person, size }) {
  return (
    <div>
     <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
        </div>
  ); 

}
