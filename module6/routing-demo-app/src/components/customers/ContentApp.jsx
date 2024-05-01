import React from 'react'
import { Link } from 'react-router-dom'
export default function ContentApp() {
  return (
    <>
    {/* fashion content start here */}
    <section id="content">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <div className="card ms-5 border-0">
              <img src="images/image(2).png" style={{ width: "100%" }} />
              <div className="card-body shadow border-bottom-0">
                <h6 className="text-danger mt-3">Hot Collection</h6>
                <h2>New Trend For Women</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur mollis neque eu erat aliquet posuere. Curabitur quis
                  placerat nulla, nec vulputate arcu
                </p>
                <button
                  type="button"
                  className="btn btn-dark text-white btn-sm p-2"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-5 mt-1  p-5">
            <div className="content-man">
              <Link
                href="#"
                className="btn btn-sm   p-3 btn-outline-white position-absolute collection"
              >
                View Collections
              </Link>
              <img src="images/man image.png" />
            </div>
            <div className="content-man mt-5">
              <Link
                href="#"
                className="btn btn-sm   p-3 btn-outline-white position-absolute collection"
              >
                View Collections
              </Link>
              <img src="images/man.png" />
            </div>
          </div>
        </div>
        {/* featured items section start here */}
        <div className="container">
          <h2 align="center" className="featured-hr">
            <span>Featured Items</span>
          </h2>
          <div className="featured w-25 mx-auto">
            <ul className="featured-link">
              <li>
                <Link href="#">All</Link>
              </li>
              <li>
                <Link href="#">Men</Link>
              </li>
              <li>
                <Link href="#">Women</Link>
              </li>
              <li>
                <Link href="#">Kids</Link>
              </li>
            </ul>
          </div>
          {/* products grid  */}
          <div className="row">
            <div className="col-md-3">
              <img
                src="images/image(3).png"
                className="img-fluid"
                style={{ width: "100%", height: 350 }}
              />
              <h4> Womens kurti</h4>
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-half text-danger" />
              <h3>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
                >
                  <i className="bi bi-heart" />
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
                >
                  <Link href="images/image(3).png" download="images/image(3).png">
                    <i className="bi bi-download" />
                  </Link>
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
                >
                  <i className="bi bi-share" />
                </button>{" "}
              </h3>
            </div>
            <div className="col-md-3">
              <img
                src="images/image(4).png"
                className="img-fluid"
                style={{ width: "100%", height: 350 }}
              />
              <h4> Womens kurti</h4>
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-half text-danger" />
              <h3>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
                >
                  <i className="bi bi-heart" />
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
                >
                  <Link href="images/image(3).png" download="images/image(3).png">
                    <i className="bi bi-download" />
                  </Link>
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
                >
                  <i className="bi bi-share" />
                </button>{" "}
              </h3>
            </div>
            <div className="col-md-3">
              <img
                src="images/image(5).png"
                className="img-fluid"
                style={{ width: "100%", height: 350 }}
              />
              <h4> Womens kurti</h4>
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-half text-danger" />
              <h3>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
                >
                  <i className="bi bi-heart" />
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
                >
                  <Link href="images/image(3).png" download="images/image(3).png">
                    <i className="bi bi-download" />
                  </Link>
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
                >
                  <i className="bi bi-share" />
                </button>{" "}
              </h3>
            </div>
            <div className="col-md-3">
              <img
                src="images/image(6).png"
                className="img-fluid"
                style={{ width: "100%", height: 350 }}
              />
              <h4> Womens kurti</h4>
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-half text-danger" />
              <h3>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
                >
                  <i className="bi bi-heart" />
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
                >
                  <Link href="images/image(3).png" download="images/image(3).png">
                    <i className="bi bi-download" />
                  </Link>
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
                >
                  <i className="bi bi-share" />
                </button>{" "}
              </h3>
            </div>
            <div className="col-md-3">
              <img
                src="images/image(3).png"
                className="img-fluid"
                style={{ width: "100%", height: 350 }}
              />
              <h4> Womens kurti</h4>
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-half text-danger" />
              <h3>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
                >
                  <i className="bi bi-heart" />
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
                >
                  <Link href="images/image(3).png" download="images/image(3).png">
                    <i className="bi bi-download" />
                  </Link>
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
                >
                  <i className="bi bi-share" />
                </button>{" "}
              </h3>
            </div>
            <div className="col-md-3">
              <img
                src="images/image(4).png"
                className="img-fluid"
                style={{ width: "100%", height: 350 }}
              />
              <h4> Womens kurti</h4>
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-half text-danger" />
              <h3>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
                >
                  <i className="bi bi-heart" />
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
                >
                  <Link href="images/image(3).png" download="images/image(3).png">
                    <i className="bi bi-download" />
                  </Link>
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
                >
                  <i className="bi bi-share" />
                </button>{" "}
              </h3>
            </div>
            <div className="col-md-3">
              <img
                src="images/image(5).png"
                className="img-fluid"
                style={{ width: "100%", height: 350 }}
              />
              <h4> Womens kurti</h4>
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-half text-danger" />
              <h3>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
                >
                  <i className="bi bi-heart" />
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
                >
                  <Link href="images/image(3).png" download="images/image(3).png">
                    <i className="bi bi-download" />
                  </Link>
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
                >
                  <i className="bi bi-share" />
                </button>{" "}
              </h3>
            </div>
            <div className="col-md-3">
              <img
                src="images/image(6).png"
                className="img-fluid"
                style={{ width: "100%", height: 350 }}
              />
              <h4> Womens kurti</h4>
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-fill text-danger" />
              <span className="bi bi-star-half text-danger" />
              <h3>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
                >
                  <i className="bi bi-heart" />
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
                >
                  <Link href="images/image(3).png" download="images/image(3).png">
                    <i className="bi bi-download" />
                  </Link>
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
                >
                  <i className="bi bi-share" />
                </button>{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* 70 % off */}
      <div className="off-grid mt-5  position-relative">
        <img src="images/slider1.png" />
        <div className="carousel-caption1  d-none position-absolute d-md-block">
          <h5 className="text-dark">70% OFF</h5>
          <p className="text-dark">70% off on selected products</p>
        </div>
        <img src="images/image(6).png" />
        <div className="carousel-caption2  d-none position-absolute d-md-block">
          <h5 className="text-white">AMR CHEHARA KHARAP NA</h5>
          <p className="text-white">Chehara Dia ki hoy</p>
        </div>
      </div>
      {/* trending items */}
      {/* featured items section start here */}
      <div className="container mt-0">
        <h2 align="center" className="featured-hr">
          <span>Trending Items</span>
        </h2>
        {/* products grid  */}
        <div className="row">
          <div className="col-md-3">
            <img
              src="images/Layer 10.png"
              className="img-fluid"
              style={{ width: "100%", height: 350 }}
            />
            <h4> Womens kurti</h4>
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-half text-danger" />
            <h3>
              <button
                type="button"
                className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
              >
                <i className="bi bi-heart" />
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
              >
                <Link href="images/image(3).png" download="images/image(3).png">
                  <i className="bi bi-download" />
                </Link>
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
              >
                <i className="bi bi-share" />
              </button>{" "}
            </h3>
          </div>
          <div className="col-md-3">
            <img
              src="images/Layer 14.png"
              className="img-fluid"
              style={{ width: "100%", height: 350 }}
            />
            <h4> Womens kurti</h4>
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-half text-danger" />
            <h3>
              <button
                type="button"
                className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
              >
                <i className="bi bi-heart" />
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
              >
                <Link href="images/image(3).png" download="images/image(3).png">
                  <i className="bi bi-download" />
                </Link>
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
              >
                <i className="bi bi-share" />
              </button>{" "}
            </h3>
          </div>
          <div className="col-md-3">
            <img
              src="images/Layer 17.png"
              className="img-fluid"
              style={{ width: "100%", height: 350 }}
            />
            <h4> Womens kurti</h4>
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-half text-danger" />
            <h3>
              <button
                type="button"
                className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
              >
                <i className="bi bi-heart" />
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
              >
                <Link href="images/image(3).png" download="images/image(3).png">
                  <i className="bi bi-download" />
                </Link>
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
              >
                <i className="bi bi-share" />
              </button>{" "}
            </h3>
          </div>
          <div className="col-md-3">
            <img
              src="images/Layer 18.png"
              className="img-fluid"
              style={{ width: "100%", height: 350 }}
            />
            <h4> Womens kurti</h4>
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-half text-danger" />
            <h3>
              <button
                type="button"
                className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
              >
                <i className="bi bi-heart" />
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
              >
                <Link href="images/Layer 19.png" download="images/image(3).png">
                  <i className="bi bi-download" />
                </Link>
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
              >
                <i className="bi bi-share" />
              </button>{" "}
            </h3>
          </div>
          <div className="col-md-3">
            <img
              src="images/Layer 24.png"
              className="img-fluid"
              style={{ width: "100%", height: 350 }}
            />
            <h4> Womens kurti</h4>
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-half text-danger" />
            <h3>
              <button
                type="button"
                className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
              >
                <i className="bi bi-heart" />
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
              >
                <Link href="images/image(3).png" download="images/image(3).png">
                  <i className="bi bi-download" />
                </Link>
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
              >
                <i className="bi bi-share" />
              </button>{" "}
            </h3>
          </div>
          <div className="col-md-3">
            <img
              src="images/image(4).png"
              className="img-fluid"
              style={{ width: "100%", height: 350 }}
            />
            <h4> Womens kurti</h4>
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-half text-danger" />
            <h3>
              <button
                type="button"
                className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
              >
                <i className="bi bi-heart" />
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
              >
                <Link href="images/image(3).png" download="images/image(3).png">
                  <i className="bi bi-download" />
                </Link>
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
              >
                <i className="bi bi-share" />
              </button>{" "}
            </h3>
          </div>
          <div className="col-md-3">
            <img
              src="images/image(5).png"
              className="img-fluid"
              style={{ width: "100%", height: 350 }}
            />
            <h4> Womens kurti</h4>
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-half text-danger" />
            <h3>
              <button
                type="button"
                className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
              >
                <i className="bi bi-heart" />
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
              >
                <Link href="images/image(3).png" download="images/image(3).png">
                  <i className="bi bi-download" />
                </Link>
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
              >
                <i className="bi bi-share" />
              </button>{" "}
            </h3>
          </div>
          <div className="col-md-3">
            <img
              src="images/image(6).png"
              className="img-fluid"
              style={{ width: "100%", height: 350 }}
            />
            <h4> Womens kurti</h4>
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-fill text-danger" />
            <span className="bi bi-star-half text-danger" />
            <h3>
              <button
                type="button"
                className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
              >
                <i className="bi bi-heart" />
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
              >
                <Link href="images/image(3).png" download="images/image(3).png">
                  <i className="bi bi-download" />
                </Link>
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-dark btn-light rounded-circle p-2"
              >
                <i className="bi bi-share" />
              </button>{" "}
            </h3>
          </div>
        </div>
      </div>
      <hr className="border border-1 w-25 mx-auto border-dark" />
      <h5 className="text-center">Load more &gt;&gt;</h5>
      <hr className="border border-1 w-25 mx-auto border-dark" />
      <br />
      <br />
      {/*  client block section */}
      <div className="our-client mt-5">
        <div
          id="carouselExampleIndicators1"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators1"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators1"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators1"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner our-client-txt">
            <div className="carousel-item  active">
              <img src="#" className="d-block w-100" alt="..." />
              <div className="carousel-caption our-client-section d-none d-md-block  w-75 mx-auto">
                <blockquote>
                  <p className="text-center">
                    <q>
                      Nunc vulputate odio vitae sapien euismod rhoncus. Vestibulum
                      ante orci, elemet molestie sed, efficitur a augue. Quisque
                      placerat laoreet lorem”{" "}
                    </q>
                  </p>
                  <p className="text-center">
                    <img
                      src="images/Layer 22.png"
                      className="img-fluid  rounded-circle"
                      style={{ width: "85px !important", height: 85 }}
                    />
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="carousel-item">
              <img src="#" className="d-block w-100" alt="..." />
              <div className="carousel-caption our-client-section d-none d-md-block  w-75 mx-auto">
                <blockquote>
                  <p className="text-center">
                    <q>
                      Nunc vulputate odio vitae sapien euismod rhoncus. Vestibulum
                      ante orci, elemet molestie sed, efficitur a augue. Quisque
                      placerat laoreet lorem”{" "}
                    </q>
                  </p>
                  <p className="text-center">
                    <img
                      src="images/Layer 22.png"
                      className="img-fluid  rounded-circle"
                      style={{ width: "85px !important", height: 85 }}
                    />
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="carousel-item">
              <img src="#" className="d-block w-100" alt="..." />
              <div className="carousel-caption our-client-section d-none d-md-block  w-75 mx-auto">
                <blockquote>
                  <p className="text-center">
                    <q>
                      Nunc vulputate odio vitae sapien euismod rhoncus. Vestibulum
                      ante orci, elemet molestie sed, efficitur a augue. Quisque
                      placerat laoreet lorem”{" "}
                    </q>
                  </p>
                  <p className="text-center">
                    <img
                      src="images/Layer 22.png"
                      className="img-fluid  rounded-circle"
                      style={{ width: "85px !important", height: 85 }}
                    />
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* our blogs */}
      {/*  client block section */}
      <div className="container our-blogs mt-5">
        <h4 className="text-center">Our Blogs</h4>
        <hr
          className="border border-1  mx-auto border-dark"
          style={{ width: "8%" }}
        />
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="images/Layer 23.png"
                className="img-fluid"
                style={{ width: "100%", height: 250 }}
              />
              <div className="card-body p-3">
                <h4>Some heading here</h4>
                <p>
                  Vivamus ultrices ut erat ut ullamcorper. Sed sem est,
                  pellentesque auctor malesuada in, sollicitupulvinar metus.
                  Aliquam scelerisque aliquet faucibus
                </p>
                <p>
                  <button type="button" className="btn btn-sm btn-outline-dark">
                    Read More
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="images/Layer 25.png"
                className="img-fluid"
                style={{ width: "100%", height: 250 }}
              />
              <div className="card-body p-3">
                <h4>Some heading here</h4>
                <p>
                  Vivamus ultrices ut erat ut ullamcorper. Sed sem est,
                  pellentesque auctor malesuada in, sollicitupulvinar metus.
                  Aliquam scelerisque aliquet faucibus
                </p>
                <p>
                  <button type="button" className="btn btn-sm btn-outline-dark">
                    Read More
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="images/Layer 24.png"
                className="img-fluid"
                style={{ width: "100%", height: 250 }}
              />
              <div className="card-body p-3">
                <h4>Some heading here</h4>
                <p>
                  Vivamus ultrices ut erat ut ullamcorper. Sed sem est,
                  pellentesque auctor malesuada in, sollicitupulvinar metus.
                  Aliquam scelerisque aliquet faucibus
                </p>
                <p>
                  <button type="button" className="btn btn-sm btn-outline-dark">
                    Read More
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* shop by brands */}
      <div className="container mt-5">
        <h2 align="center" className="featured-hr">
          <span>Shop by brands</span>
        </h2>
        {/* apply carsels */}
        <section className="center slider">
          <div>
            <img
              src="images/relience.png"
              style={{ width: "100%", height: 150 }}
            />
          </div>
          <div>
            <img src="images/jordan.jpg" style={{ width: "100%", height: 150 }} />
          </div>
          <div>
            <img
              src="images/pantaloons.jpg"
              style={{ width: "100%", height: 150 }}
            />
          </div>
          <div>
            <img src="images/puma.jpg" style={{ width: "100%", height: 150 }} />
          </div>
          <div>
            <img src="images/us.jpg" style={{ width: "100%", height: 150 }} />
          </div>
          <div>
            <img src="images/zudio.jpg" style={{ width: "100%", height: 150 }} />
          </div>
          <div>
            <img
              src="images/skrechers.webp"
              style={{ width: "100%", height: 150 }}
            />
          </div>
        </section>
      </div>
    </section>
  </>
  
  )
}
