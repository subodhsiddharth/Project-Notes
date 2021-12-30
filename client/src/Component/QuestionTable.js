// import React from 'react'



import React ,{useState, useEffect} from 'react'
import axios from 'axios';
import 'antd/dist/antd.css';
import './CSS/QuestionTable.css';
import CardData from './Card';
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
      <div id='tt'>
        <CardData/>
<div className='parrent' >

<div style={{display:"flex" , alignItems:"center"}}>
<div style={{marginLeft:"100px", marginTop:"80px", marginBottom:"40px"}}>
 <h3 style={{fontSize:"25px", color:"#030c5b"}}>List Of Questions</h3>
 
 <hr style={{height:"2px", borderWidth:"0px", color:"#030c5b" , backgroundColor:"#030c5b" ,marginLeft:"40px", marginRight:"40px"}}/>
</div>
<div className='searchfilter' style={{marginLeft:"800px", marginTop:"80px", marginBottom:"40px"}}>
<select  style={{backgroundColor:"#F2F3F4" , width:"130px" ,border:"none" , fontSize:"18px", fontWeight:"500"}}>
<option value="0">Difficulty</option>
  <option value="Easy">Easy</option>
  <option value="Medium">Medium</option>
  <option value="Hard">Hard</option>
 
</select>
</div>



</div>



</div>

<div >

<table striped bordered hover>
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
</table>
</div>
    </div>
  );
}



export default QuestionTable;