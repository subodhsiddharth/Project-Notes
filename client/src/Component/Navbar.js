import React from 'react'
import Button from './Button'
import {Link} from 'react-router-dom'
import '../Component/CSS/Navbar.css'

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  menu">
        <div class="container-fluid leftmenu">
          <a class="navbar-brand" href="/">
          <img src ="/Alchemy-infotech-logo-1-300x179.png" className="icon"  />
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
              <Button className="btn btn-outline-primary me-2 btnregister" text="Register" href="/register" />
              <Button className="btn btn-outline-primary btnregister" text="Login" href="login" />
            </ul>
          </div>
        </div>
    </nav>
    
  </div>
  )
}
