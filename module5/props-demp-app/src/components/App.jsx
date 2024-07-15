import React from 'react'
import Avtar from './Avtar';

function Card({ children }) {
    return (
      <div className="card">
        {children}
      </div>
    );
  }
  
  export default function Profile() {
    return (
      <Card>
        <Avtar 
          size={100}
          person={{ name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'}}
        />
      </Card>
    );
  }