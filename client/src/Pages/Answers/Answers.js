
import React ,{useState, useEffect} from 'react'
import axios from 'axios';
import DrpDwnSection from '../../Component/DroupDownSection'
import Heading from '../../Component/Heading';
import AllQusetion from "../Allquestion/Allquestion"
import "../../Component/CSS/Home.css";
import { Link } from 'react-router-dom';
export default function Answers(props) {
  console.log(props);
  let report;
    const[quesdesc, setquesdesc]= useState()
    useEffect (()=>{
        const fetchPostList = async () =>{
          const { data } =await axios("http://localhost:8080/questions" )
          report = data;
          console.log(report);
          setquesdesc(data[props.match.params.id].description)
          
          console.log(data[props.match.params.id].description)

        }

        fetchPostList()
      },)
    return(
        <div>
               <div className='heading'>
<Heading/>  
</div>
<div className='main-div'>
<div className='question '>
    <h2>Question : {props.match.params.id}</h2>
    <h3>{quesdesc}</h3>
</div>

<div className='compiler'   >
<DrpDwnSection />
</div>
    
<h3>{report}</h3>
</div>  

        </div>
    )
}