// import React from 'react'
import 'antd/dist/antd.css';
import './CSS/QuestionTable.css'


import React ,{useState, useEffect} from 'react'
import axios from 'axios';
import ReactDOM from "react-dom";
import data from "./data";
import Table from "./DataTable";
import '../Component/CSS/styles.css'
import { Link, useParams } from 'react-router-dom';
import DrpDwnSection from './DroupDownSection';
import * as ReactBootstrap from 'react-bootstrap'


function QuestionTable(props) {

const params = useParams();
console.log(params)
const[posts, setPosts]= useState({blogs:[]})
useEffect (()=>{
  const fetchPostList = async () =>{
    const { data} =await axios("http://localhost:8080/questions" )

    setPosts({blogs:data})
    console.log(data)

  }

  fetchPostList()
},[setPosts])

  return (
    // <div className="App" style={{marginLeft:"100px", marginRight:"100px", backgroundColor:"white"}} >
    
      /* <a href={<DrpDwnSection/>}><Table data={data}  /> </a> */
      <>
{/* 
<Link to='/Answers'><Table data={data}  /> </Link> */}

<div id='tt' style={{width:"70%", marginLeft:"250px", opacity:".8", marginTop:"80px" ,borderRadius:"10px" }}>
<ReactBootstrap.Table striped bordered hover>
  <thead>
    <tr>
<th></th>
      <th>Title</th>
      <th>Difficulty</th>
      
    </tr>
  </thead>
  <tbody>
  {
    posts.blogs && posts.blogs.map((item, index)=>(
<tr key={item._id}>
<td>{item.id}</td>
      <Link to={'/Question/'+index}><td>{item.title}</td></Link>
      <td>{item.difficulty}</td>
      
</tr>
    ))
  }
   
   
  </tbody>
</ReactBootstrap.Table>
</div>
    </>
  );
}



export default QuestionTable;