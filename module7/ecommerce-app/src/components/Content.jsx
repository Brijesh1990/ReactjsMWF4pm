import React from 'react'
// import { Button} from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import product1 from '../assets/images/product1.png';
import product2 from '../assets/images/product2.png';
import product3 from '../assets/images/product3.png';
import product4 from '../assets/images/product4.png';
import product5 from '../assets/images/product5.png';
import login from '../assets/images/login_img_c4a81e.png';
import adv from '../assets/images/adv.png';
export default function Content() {
  return (

    <>
  <section id="be-pro-content" className="p-5 mt-3">
    {/* popular products */}
    <div className="container">
      <div className="row justify-content-evenly">
        <div className="col-md-3 bg-dark p-3">
          <p className="text-white text-center">
            <span className="bi bi-fire fs-2" />
          </p>
          <h3 className="text-center text-white">Popular Product</h3>
          <p className="text-white text-center"></p>
          <details>
            <summary className="text-white text-center">More Products</summary>
          </details>
          <p />
        </div>
        <div className="col-md-2 mt-1 p-3 img-thumbnail">
          <p className="text-white text-center">
            <img src={product1} />
          </p>
          <p className="text-center">Polo T-shirts</p>
          <p className="text-center">
            <del>Rs.4500-/</del> <span className="text-primary">Rs.3500-/</span>
          </p>
        </div>
        <div className="col-md-2 mt-1 p-3 img-thumbnail">
          <p className="text-white text-center">
            <img src={product3} />
          </p>
          <p className="text-center">Polo T-shirts</p>
          <p className="text-center">
            <del>Rs.4500-/</del> <span className="text-primary">Rs.3500-/</span>
          </p>
        </div>
        <div className="col-md-2 mt-1 p-3 img-thumbnail">
          <p className="text-white text-center">
            <img src={product1} />
          </p>
          <p className="text-center">Polo T-shirts</p>
          <p className="text-center">
            <del>Rs.4500-/</del> <span className="text-primary">Rs.3500-/</span>
          </p>
        </div>
      </div>
     

      {/* new lifestyle */}
      <div className="row justify-content-evenly mt-3">
        <div className="col-md-3 bg-white p-3 img-thumbnail ms-0">
          <p className="text-white text-center">
            <img src={product1} />
          </p>
          <p className="text-center">Polo T-shirts</p>
          <p className="text-center">
            <del>Rs.4500-/</del> <span className="text-primary">Rs.3500-/</span>
          </p>
        </div>
        
        <div className="col-md-7 mt-1 bg-primary p-5">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white">
                <button
                  type="button"
                  className="b tn btn-sm border border-0 bg-white btn-white"
                >
                  New
                </button>
              </p>
              <h6 className="text-white">Lifestyle</h6>
              <h5 className="text-white">Bew Now : Stripped Cotton</h5>
              <button
                type="button"
                className="btn-group btn btn-sm  bg-white text-dark w-50 border border-0 ms-0"
              >
                $ 50.00 | Buy Now
              </button>
            </div>
            <div className="col-md-6 stripped-cotton"></div>
          </div>
        </div>
      </div>
      {/* product listing */}
      <div className="row justify-content-evenly mt-3 items">
        <div className="col-md-2 bg-white p-3 img-thumbnail ms-0  item">
          <p className="text-white text-center">
            <img src={product4} />
          </p>
          <p className="text-center">Polo T-shirts</p>
          <p className="text-center">
            <del>Rs.4500-/</del> <span className="text-primary">Rs.3500-/</span>
          </p>
        </div>
        <div className="col-md-2 bg-white p-3 img-thumbnail ms-0   item">
          <p className="text-white text-center">
            <img src={product3} />
          </p>
          <p className="text-center">Polo T-shirts</p>
          <p className="text-center">
            <del>Rs.4500-/</del> <span className="text-primary">Rs.3500-/</span>
          </p>
        </div>
        <div className="col-md-2 bg-white p-3 img-thumbnail ms-0 item">
          <p className="text-white text-center">
            <img src={product2} />
          </p>
          <p className="text-center">Polo T-shirts</p>
          <p className="text-center">
            <del>Rs.4500-/</del> <span className="text-primary">Rs.3500-/</span>
          </p>
        </div>
        <div className="col-md-2 bg-white p-3 img-thumbnail ms-0  item">
          <p className="text-white text-center">
            <img src={product1} />
          </p>
          <p className="text-center">Polo T-shirts</p>
          <p className="text-center">
            <del>Rs.4500-/</del> <span className="text-primary">Rs.3500-/</span>
          </p>
        </div>
        <div className="col-md-2 bg-white p-3 img-thumbnail ms-0   item">
          <p className="text-white text-center">
            <img src={product2} />
          </p>
          <p className="text-center">Polo T-shirts</p>
          <p className="text-center">
            <del>Rs.4500-/</del> <span className="text-primary">Rs.3500-/</span>
          </p>
        </div>
        <div className="col-md-2 bg-white p-3 img-thumbnail ms-0  item">
          <p className="text-white text-center">
            <img src={product1} />
          </p>
          <p className="text-center">Polo T-shirts</p>
          <p className="text-center">
            <del>Rs.4500-/</del> <span className="text-primary">Rs.3500-/</span>
          </p>
        </div>
        <div className="col-md-2 bg-white p-3 img-thumbnail ms-0  item">
          <p className="text-white text-center">
            <img src={product1} />
          </p>
          <p className="text-center">Polo T-shirts</p>
          <p className="text-center">
            <del>Rs.4500-/</del> <span className="text-primary">Rs.3500-/</span>
          </p>
        </div>
        <div className="col-md-2 bg-white p-3 img-thumbnail ms-0   item">
          <p className="text-white text-center">
            <img src={product1} />
          </p>
          <p className="text-center">Polo T-shirts</p>
          <p className="text-center">
            <del>Rs.4500-/</del> <span className="text-primary">Rs.3500-/</span>
          </p>
        </div>
        <div className="col-md-2 bg-white p-3 img-thumbnail ms-0   item">
          <p className="text-white text-center">
            <img src={product2} />
          </p>
          <p className="text-center">Polo T-shirts</p>
          <p className="text-center">
            <del>Rs.4500-/</del> <span className="text-primary">Rs.3500-/</span>
          </p>
        </div>
        <div className="col-md-2 bg-white p-3 img-thumbnail ms-0  item">
          <p className="text-white text-center">
            <img src={product1} />
          </p>
          <p className="text-center">Polo T-shirts</p>
          <p className="text-center">
            <del>Rs.4500-/</del> <span className="text-primary">Rs.3500-/</span>
          </p>
        </div>
        <div className="col-md-2 bg-white p-3 img-thumbnail ms-0   item">
          <p className="text-white text-center">
            <img src={product4} />
          </p>
          <p className="text-center">Polo T-shirts</p>
          <p className="text-center">
            <del>Rs.4500-/</del> <span className="text-primary">Rs.3500-/</span>
          </p>
        </div>
        <div className="col-md-2 bg-white p-3 img-thumbnail ms-0  item">
          <p className="text-white text-center">
            <img src={product3} />
          </p>
          <p className="text-center">Polo T-shirts</p>
          <p className="text-center">
            <del>Rs.4500-/</del> <span className="text-primary">Rs.3500-/</span>
          </p>
        </div>
        <div className="col-md-2 bg-white p-3 img-thumbnail ms-0   item">
          <p className="text-white text-center">
            <img src={product3} />
          </p>
          <p className="text-center">Polo T-shirts</p>
          <p className="text-center">
            <del>Rs.4500-/</del> <span className="text-primary">Rs.3500-/</span>
          </p>
        </div>
        <div className="col-md-2 bg-white p-3 img-thumbnail ms-0   item">
          <p className="text-white text-center">
            <img src={product1} />
          </p>
          <p className="text-center">Polo T-shirts</p>
          <p className="text-center">
            <del>Rs.4500-/</del> <span className="text-primary">Rs.3500-/</span>
          </p>
        </div>
        <div className="col-md-2 bg-white p-3 img-thumbnail ms-0   item">
          <p className="text-white text-center">
            <img src={product1} />
          </p>
          <p className="text-center">Polo T-shirts</p>
          <p className="text-center">
            <del>Rs.4500-/</del> <span className="text-primary">Rs.3500-/</span>
          </p>
        </div>
        <div className="col-md-2 bg-white p-3 img-thumbnail ms-0   item">
          <p className="text-white text-center">
            <img src={product1} />
          </p>
          <p className="text-center">Polo T-shirts</p>
          <p className="text-center">
            <del>Rs.4500-/</del> <span className="text-primary">Rs.3500-/</span>
          </p>
        </div>
        <div className="col-md-2 bg-white p-3 img-thumbnail ms-0  item">
          <p className="text-white text-center">
            <img src={product1} />
          </p>
          <p className="text-center">Polo T-shirts</p>
          <p className="text-center">
            <del>Rs.4500-/</del> <span className="text-primary">Rs.3500-/</span>
          </p>
        </div>
        <div className="col-md-2 bg-white p-3 img-thumbnail ms-0   item">
          <p className="text-white text-center">
            <img src={product1} />
          </p>
          <p className="text-center">Polo T-shirts</p>
          <p className="text-center">
            <del>Rs.4500-/</del> <span className="text-primary">Rs.3500-/</span>
          </p>
        </div>
        <div className="col-md-2 bg-white p-3 img-thumbnail ms-0   item">
          <p className="text-white text-center">
            <img src={product1} />
          </p>
          <p className="text-center">Polo T-shirts</p>
          <p className="text-center">
            <del>Rs.4500-/</del> <span className="text-primary">Rs.3500-/</span>
          </p>
        </div>
        <div className="col-md-2 bg-white p-3 img-thumbnail ms-0   item">
          <p className="text-white text-center">
            <img src={product1} />
          </p>
          <p className="text-center">Polo T-shirts</p>
          <p className="text-center">
            <del>Rs.4500-/</del> <span className="text-primary">Rs.3500-/</span>
          </p>
        </div>
        {/* load more */}
        <p className="lead">
          Displayed <b className="shownLength" /> Of{" "}
          <b className="listLength" /> Results.
        </p>
        <p className="text-center" />
        <div className="buttonToogle w-100" style={{ display: "none" }}>
          <a href="javascript:;" className="showMore w-50 mx-auto">
            + View More
          </a>
        </div>
        <p />
      </div>
    </div>
    <div className="clearfix" />
  </section>
  {/* events */}
  <div className="be-pro-events container-fluid">
    <div className="be-pro-events-text">
      <p className="text-center text-white">Event</p>
      <h1 className="text-center text-white">
        Bharat Fashin week October 2023
      </h1>
      <p className="text-center text-white">23 October to 28 October 2023</p>
    </div>
  </div>
  {/* advertisement banner */}
  <div className="be-pro-adevrtisment container mt-3">
    <div className="row">
      <div className="col-md-5 ms-5 pro-adv">
        <div className="row">
          <div className="col-md-8 text-white p-5">
            <p>Suits</p>
            <h2>Slim Fit Prince of Wales Check Wool</h2>
            <p>26-10-2023</p>
          </div>
          <div className="col-md-4  pro-adv-img">
            <img
              src={adv}
              alt="adv"
              title="advertisement"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="col-md-5 ms-5 pro-adv">
        <div className="row">
          <div className="col-md-8 text-white p-5">
            <p>Suits</p>
            <h2>Slim Fit Prince of Wales Check Wool</h2>
            <p>26-10-2023</p>
          </div>
          <div className="col-md-4  pro-adv-img">
            <img
              src={adv}
              alt="adv"
              title="advertisement"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
    {/* most be pro popular  */}
    <div className="row">
      <div className="col-md-3 ms-5 mt-5">
        <div className="">
          <p className="text-center mt-5">Number of day</p>
          <h1 className="text-center">1947</h1>
          <h5 className="text-center">combo sale upto 50%</h5>
          <p className="text-center mt-5">
            <button type="button" className="btn btn-sm btn-primary  border border-0">
              Read More
            </button>
          </p>
        </div>
      </div>
      <div className="col-md-7 ms-5 mt-5">
        <div className="card border border-1 border-secondary">
          <div className="card-header m-0 p-0 bg-white  border-1 border-secondary">
            <strong className="m-0 mt-3 ms-5 position-absolute">Popular</strong>
            <nav
              aria-label="Page navigation example"
              className="m-0 p-0 d-flex float-end"
            >
              <ul className="pagination m-0 p-0">
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="bi bi-arrow-left-short fs-2" />
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="bi bi-arrow-right-short fs-2" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="card-body p-5">
            <div className="row">
              <div className="col-md-7  ms-2">
                <div className="p-5">
                  <p className="m-0  mt-5">Date 26-10-2023</p>
                  <p className="fs-5">
                    The Be pro Fashion Style design unique for youth hurry up
                    50% discount
                  </p>
                  <p className="">
                    <i className="bi bi-heart">05</i> |{" "}
                    <i className="bi bi-chat">150</i>
                  </p>
                </div>
              </div>
              <div className="col-md-4 ms-2 p-3">
                <div className="be-pro-popular-right">
                  <div className="be-pro-popular-right-text p-3">
                    <p className="m-0 mt-5">Date 26-10-2023</p>
                    <p className="text-white fs-5">
                      The Be pro Fashion Style design unique for youth hurry up
                      50% discount
                    </p>
                    <p className="text-white">
                      <i className="bi bi-heart">05</i> |{" "}
                      <i className="bi bi-chat">150</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    

  )
}
