import React from 'react';
import '../Login/Login.css';
import loginpic from "../../Image/Group60.png"
import Navbar from "../../Component/Navbar"
import Field from '../../Component/Field'
import Button from '../../Component/Button';
import Axios from 'axios'
import { useState } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';


export default function Login() {

    let [username, setUsername] = useState('');
    let [pass, setpass] = useState('');
    let [loginstatus, setloginstatus] = useState(0);
    let message = <h5>Not Logged in</h5>;

    let onchangeemailhandler = (event) => {
        setUsername(event.target.value);
        console.log(username);
    }
    let onchangepasswordhandler = (event) => {
        setpass(event.target.value);
        console.log(pass);
    }


    let submithandler = (event) => {
        event.preventDefault();
        //console.log("Enter into function");
        let formdata = {
            username: username,
            password: pass
        };
        //console.log(formdata);
        Axios.post('http://localhost:8080/users/login', formdata).then(
            res => {
                setloginstatus(res.status);
                console.log(res.status)
                const { token } = res.data;
                localStorage.setItem('token', token);
            }
        ).catch(error => {
            console.log(error.data)
        })
        console.log(formdata);
        console.log(loginstatus);
    }
    if (loginstatus === 200) {
        //  message = <h2>Successfully Logged in</h2>
        message = <Switch>
            <Redirect to="/allquestion" />
        </Switch>

        return message;

    }



    return (
        <>
        <Navbar/>
        <div id="login" style={{display:"flex"}} >
        
       <div className="container-lgn" >
       <form  >
            <div >

                <h1>Login</h1>
                <div class="panel-body mt-4">
                    <Field type="email" className=" form-label ipt " label="Email" placeholder="Your Email" onChange={onchangeemailhandler} />
                    <Field type="password" className="form-label iptpassword" label="Password" placeholder="Enter Password" onChange={onchangepasswordhandler} />

                    {/* <button class="btn btn-lgn " type="submit" href="/Activequiz" onchange={submitHandler}   >Login</button> */}
                    <button type='button' className="btn loginbutton" onClick={submithandler} >Login</button>

                    {/* <Button className="btn loginbutton" text="Login" type="submit" onClick={apiGet}   /> */}
                    <a href="/register" className="txt"> Click for Register </a>

                </div>
                {/* <div>{message}</div> */}

            </div>
        </form>
       </div>

       <div style={{color:"white"}}>
<img src={loginpic} alt='' style={{height:"540px" , width:"640px", marginTop:"80px" , marginLeft:"130px"}} />
       </div>

    </div>
    </>
    )
}
