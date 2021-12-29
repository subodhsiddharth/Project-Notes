import React from 'react';

const Output=(props)=>{
    return(
        <div>
 <div className="container-fluid">
      <div className="fakeScreen" id="opscreen" >
        <p className="line1">Output<span className="cursor1">_</span></p>
        <p className="line4"><span id="output" >{props.showOutput}</span></p>
      </div>
    </div>
    
    {/* <div className="container-fluid" >
      <div className="fakeScreen" id="opscreen" style={{visibility: "visible"}}>
        <p className="txtcase" id="testcase"></p>
        
      </div>
    </div> */}
        </div>
    )
}
export default Output; 