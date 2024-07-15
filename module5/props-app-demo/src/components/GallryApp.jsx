import React from 'react'
import { Container,Card,Row } from 'react-bootstrap'
import { Gallery } from './Gallary'

export default function GallryApp(props) {
  return (
    <div>

    <Container className='p-0'>
      <h3 className='h3 ms-5'>Gallery Apps</h3>
        <Row className='p-0'>
            {Gallery && Gallery.map((row)=>{
            return(<>
            <div className='col-md-3  m-3 ms-5 mt-4'>
            <Card className='card p-0'>
                <img src={row.photo} className='img-fluid' alt='img01' style={{width:"100%",height:"250px"}} />
                <div className='card-body p-3'>
                <p className='h3'>{row.galleryname}</p>
                </div>
              
            </Card>
            </div>

            </>
            );    
          

            })}
           
           
        </Row>
    </Container>
      
    </div>
  )
}
