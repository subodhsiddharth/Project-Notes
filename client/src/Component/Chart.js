import React from 'react';
import Sidebar from './Sidebar';
import LineBar from "./LineChart"
import Bargraph from "./BarChart"
import PichartExample from "./PiChart"

function Chart() {
    return (
        <>
     <div style={{width:"100%" , display:"flex"}}>
     <div style={{width:"20%"}}>
<Sidebar/>
       </div>
       <div style={{width:"80%" }}>
<div style={{display:"flex"}}>
<div className="group-121 " style={{width:"40%"}}>
<Bargraph/>
</div>
<div className="group-122" style={{width:"40%"}}>
<LineBar/>
</div>
</div>

<div style={{display:"flex"}}>
<div  style={{width:"40%"}}>

<div className="group-121">
      <div className="flex-col">
        <div className="problem-solved">
          Problem Solved
        </div>
        <div className="numberarial-regular-normal-black-25px">
          0
        </div>
        <div className="flex-row">
          <div className="easy">
            Easy
          </div>
          <div className="medium">
            Medium
          </div>
          <div className="place">
            Hard
          </div>
        </div>
        <div >
          <div className="text-1">
            0/38
          </div>
          <div className="text-2">
            0/38
          </div>
          <div className="text-3">
            0/38
          </div>
        </div>
      </div>
      <div className="overlap-groupborder-1px-dove-gray">
        <h1 className="titlearial-regular-normal-black-25px">
          0%
          <br />
          Acceptance
        </h1>
      </div>
    </div> 

</div>
<div className="group-123 " style={{width:"40%"}}>
<PichartExample/>
</div>
</div>

       </div>
    
     </div>
      







      
        </>
    )
}

export default Chart
