import React from "react";
import Counter from './component/Counter'
function App()
{
  return(
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 w-50 mx-auto bg-light shadow p-5 mt-5">
          <h4>The counter App using Redux</h4>
          <Counter />


          </div>
        </div>
      </div>
    </>
  )
}

export default App