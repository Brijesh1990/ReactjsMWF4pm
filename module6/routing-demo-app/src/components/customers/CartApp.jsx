import React from 'react'
import HeaderApp from './HeaderApp'
import NavbarApp from './NavbarApp'
import FooterApp from './FooterApp'
export default function CartApp() {
  return (
<>
<HeaderApp />
<NavbarApp />
  {/* fashion content start here */}
  <section id="content">
    <div className="card mt-5 container p-5">
      <div className="card-header bg-white">
        <h4>
          <span>My Cart(1 item)</span>
        </h4>
      </div>
      <div className="card-body">
        <table className="table table-responsive">
          <tbody>
            <tr align="center">
              <td>
                <img
                  src="https://images.shopclues.com/images1/thumbnails/116980/320/320/153323501-116980797-1676629226.jpg"
                  className="img-fluid"
                  style={{ width: 85, height: 85 }}
                />
              </td>
              <td>Polo shirt best in price</td>
              <td>Xl in size</td>
              <td>Rs. 3650/-</td>
              <td>
                <input
                  type="number"
                  name="qty"
                  min={1}
                  max={10}
                  defaultValue={1}
                  className="form-control w-25"
                />
              </td>
              <td>
                <i className="bi bi-trash fs-4 text-danger" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card-footer bg-white shadow p-3">
        <div className="row">
          <div className="col-md-7">
            <p>
              <i className="bi bi-geo-alt fs-2" /> Delivery pin code
            </p>
            <div className="input-group p-1 w-50">
              <input
                type="text"
                name="pincode"
                placeholder="Enter your pincode"
                className="form-control"
              />
              <span className="input-group-text bg-primary text-white">
                Submit
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <h4>
              Total₹ <span className="float-end fs-6">429</span>
            </h4>
            <b>
              Grand Total₹ <span className="float-end"> 429 </span>
            </b>
            <p>Inclusive of all the applicable taxes</p>
            <p>
              <button
                type="submit"
                name="checkout"
                className="btn btn-primary text-white btn-lg w-100"
              >
                Checkout
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

<FooterApp />
</>

  )
}
