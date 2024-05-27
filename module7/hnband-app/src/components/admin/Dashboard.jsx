import React from 'react'
import {Chart} from 'react-google-charts';

export default function Dashboard() {
return (
<>
<div className="col-md-8 ms-5 p-2 mt-4">

<div className="row">
<div className="col-md-3 p-4 shadow ms-4 bg-success">
<button type="button" className="btn btn-dark">
  Total Band <span className="badge bg-danger">4</span>
</button>
</div>
<div className="col-md-3 p-4 shadow ms-4 bg-info">
<button type="button" className="btn btn-dark">
  Total Blogs <span className="badge bg-danger">4</span>
</button>
</div>
<div className="col-md-4 p-4 shadow ms-4 bg-warning">
<button type="button" className="btn btn-dark">
  Total Album <span className="badge bg-danger">4</span>
</button>
</div>
<div className="col-md-6 p-4 shadow ms-4 mt-5">
<Chart
  chartType="ScatterChart"
  data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
  width="100%"
  height="400px"
  legendToggle
/>
</div>
<div className="col-md-4 p-4 shadow  ms-5 mt-5">
<Chart
  chartType="ScatterChart"
  data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
  width="100%"
  height="400px"
  legendToggle
/>
</div>
</div>
</div>


</> 
)
}
