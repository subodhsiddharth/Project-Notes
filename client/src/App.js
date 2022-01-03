import React, { Component } from 'react';
import Login from "./Pages/Login/Login";
import Register from "./Pages/Registration/Register";
import './App.css';
import Dashboard from "./Pages/Dashboard/Dashboard"
import HomePage from './Pages/Home/Home';
import Allquestion from './Pages/Allquestion/Allquestion';
import {Redirect, Route, Switch} from "react-router-dom";
import Navbar from './Component/Navbar';
import Answers from './Pages/Answers/Answers';
import Editprofile from './Pages/EditProfile/Editprofile';


function App() {
  return (
    <div >
     {/* <Navbar/> */}
     <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/Login" component={Login}/>
      <Route path="/Register" component={Register}/>
      <Route path="/Allquestion" component={Allquestion}/>
      <Route path={"/Question/:id" } component={Answers}/>
      <Route path = "/Editprofile" component={Editprofile}/>
     
      {/* <Route path="/form" component={form}/> */}
      <Redirect to="/login"/>
      
    </Switch>

    </div>
  );
}

export default App;
