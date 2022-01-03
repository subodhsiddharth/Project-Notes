import React from 'react'
import { Popover} from 'antd';
import {Link} from 'react-router-dom'
import '../Component/CSS/Navbar.css'
import logo from "../Image/logo.png";
import {FaUser, FaUserCircle} from "react-icons/fa"
import { FiLogOut } from 'react-icons/fi';
const content = (
  <div>
{/* <ul>
<li>
    <FaUser/>
    <Link to="/Editprofile">My Profile</Link>
        </li>
   
    <li>
    <FiLogOut/>
<Link to="/login">Logout</Link>
    </li>
</ul> */}
<div style={{display:"flex" }}>
    <div><FaUser/></div>
    <div style={{marginLeft:"5px"}}> <Link to="/Editprofile">My Profile</Link></div>
</div>
<div style={{display:"flex" }}>
    <div>    <FiLogOut/></div>
    <div style={{marginLeft:"5px"}}><Link to="/login">Logout</Link></div>
</div>
  </div>
);


// import Button from './Button'

function SecondNavbar() {
    return (
        <div>
             <div>
      <nav class="navbar navbar-expand-lg  menu">
        <div class="container-fluid leftmenu">
          <a class="navbar-brand" href="/">
          <img src ={logo} className="icon"  />
          </a>
          <img src=''/>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li class="nav-item">
                <Button className="nav-link active" text="Problems" href="/allquestion" />  
              </li> */}
              {/* <li class="nav-item">
                <Button className="nav-link active" text="" href="#" />
              </li> */}
              {/* <li class="nav-item">
                <Button className="nav-link active" text="QUIZ" href="/RichTextEditor" />
              </li> */}
              {/* <li className="nav-item">
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <Button className="btn btn-outline-primary" text="Search" href="#" />
                </form></li> */}
            </ul>
            <ul class="nav menuright">
              {/* <Button className="btn btn-outline-primary me-2 btnregister" text="Register" href="/register" /> */}
{/*               
              <Button className="btn btn-outline-primary btnregister" text="Logout" href="login" /> */}
                <Popover content={content}  trigger="hover">
                <FaUserCircle style={{fontSize:"40px " , width:"50px"}}/>
    </Popover>
   

            </ul>
          </div>
        </div>
    </nav>
    
  </div>
        </div>
    )
}

export default SecondNavbar
