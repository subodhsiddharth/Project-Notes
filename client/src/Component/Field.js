import React from "react";
const Field = (props) => {
    return (
        <div class="mb-3">
            {/* <label  class={props.class}>{props.label}<span style={{color:"red"}}>*</span></label> */}
            <input type={props.type} className={props.className}  onChange={props.onChange} placeholder={props.placeholder} id={props.id}  />
      
          
        </div>
    );
}

export default Field;