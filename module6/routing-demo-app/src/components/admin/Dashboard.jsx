import React from 'react'
import {Chart} from 'react-google-charts';

export default function Dashboard() {
return (
<>
<div className="col-md-9 ms-5 p-2 mt-4">
<div className="row">
<div className="col-md-3 p-4 shadow ms-4 bg-success" />
<div className="col-md-3 p-4 shadow ms-4 bg-info" />

<div className="col-md-4 p-4 shadow ms-4 bg-warning" />
<div className="col-md-6 p-4 shadow ms-4 mt-5">
<div id="barchart_values" style={{width:"100%"}}></div>
</div>
<div className="col-md-4 p-4 shadow  ms-5 mt-5">
<div id="donutchart" style={{width:"100%"}}></div>
</div>
</div>
</div>


</> 
)
}
