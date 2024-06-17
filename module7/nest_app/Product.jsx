import React from 'react'

export default function Product() {
  return (
    <>
      <div className="product">
        <h1>Popular Product</h1>
        <div className="row">
          <div className="col-md-3">
            <div className="card" style="width: 18rem;">
              <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">title</h5>
                <p className="card-text">description</p>
                <p className="card-text">price</p>
                <p className="card-text">By owner</p>
                <a href="#" className="btn btn-primary">Add cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
