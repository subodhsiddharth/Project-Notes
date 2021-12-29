import Button from "../../Component/Button";
import Field from "../../Component/Field";
import Navbar from "../../Component/Navbar";
import '../Registration/Register.css'
import Axios from 'axios'
import { useState } from "react";




const Register = () => {
const [fullname, setFullName]=useState('');
const[email,setemail]=useState('');
const[pass,setpass]=useState('');
const[regstatus,setregstatus]=useState(0);
let message=<h4>Not registered</h4>;


const onchangenamehandler =(event)=>
{
    setFullName(event.target.value);
}

const onchangeemailhandler =(event)=>{
    setemail(event.target.value);
}

const onchangepasswordhandler =(event)=>{
    setpass(event.target.value);
}

const submitHandler=(event)=>
{
    event.preventDefault();
    const formdata={
        // name:usernameReg,
        username:email,
        password:pass,
        name:fullname
    };
    Axios.post('http://localhost:8080/users/signup',formdata).then(
        res=>{
            setregstatus(res.status);
            
        }
    ).catch(error=>{
        console.log(error.data)
    })
}
if(regstatus === 200)
{
    message = <h4>Successfully Registered</h4>
    return message;
};
    return(
        <>
        {/* <Navbar/> */}
        <form onSubmit={submitHandler}>
      
        <div className="container-lgn">
          <h1>Sign Up</h1>
          <div class="panel-body mt-4">
          {/* <Field type="text" className="form-label" label="Name" onChange={onchangenamehandler} /> */}
          {/* <Field type="text" className="form-label" label="Full Name" placeholder="Your Name"  onChange={onchangeemailhandler}/>
          <Field type="text" className="form-label" label="Contact No." placeholder="Contact No." onChange={onchangeemailhandler}/> */}
         <Field type="text" className="form-label iptpassword" label="Name" placeholder="Your Name" onChange={onchangenamehandler} />
         <Field type="email" className="form-label iptpassword" label="User Name" placeholder="Your Email" onChange={onchangeemailhandler} />
         <Field type="password" className="form-label iptpassword" label="Password" placeholder="Enter Password" onChange={onchangepasswordhandler}/>
         {/* <Button type ="submit "className="btn btn-primary" text="Register Here" onChange={submitHandler}/> */}
         <button class="btn rgistraionbutton" type="submit" onChange={submitHandler} >Sign Up</button>
         

</div>
{/* <div>{message}</div> */}
</div>
     </form>
     </>
    );
}

export default Register;