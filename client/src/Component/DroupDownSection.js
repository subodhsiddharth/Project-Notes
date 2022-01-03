import React ,{useState} from 'react';
import '../App.css'
import Button from './Button';
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown';
import CodeCompiler from './Editor'
import Field from './Field';
import Output from './Output';


const plang = [
  "c", "c99", "c++", "c++14", "c++17","php", "perl","python2","python3",
  "ruby",
   "golang",
   "scala",
   "bashshell",
  "sql",
  "pascal",
  "c#",
   "vb.net",
  "haskell",
   "objectivec",
  "swift",
  "groovy",
  "fortran",
  "lua",
   "tcl",
  "hack",
  "rust",
 "d",
  "ada",
  "java",
  "rlanguage",
 "freebasic",

   "verilog",
  "cobol",
  "dart",
  "yabasic",
   "clojure",
   "nodejs",
  "scheme",
   "forth",
  "prolog",
   "octave",
   "coffeescript",
   "icon",
   "f#",
"assemblernasm"]




let token = localStorage.getItem('token');
//console.log(token);
const DrpDwnSection = () => {


  const [selectedvalue, setSelectedvalue] = useState("c");
  const [inp, setinp] = useState();
  const [code, setcode] = useState();
  const [output, setoutput] = useState();
  // const [submitOutput, setSubmitOutput] = useState();
  var v;
  function handleEditorChange(e) {
    setcode(e);
    console.log(e)
    }
  
function handleChange(e){
  setinp(e.target.value);
  console.log(e.target.value);
   }
  
  const Drophandlechange = e => {
    setSelectedvalue(e.value);
    console.log(selectedvalue);
    
  }
  const setoutputfunc = e => {
    setoutput(e);
    console.log(output);
  }
  // const setSubmitOutputfunc = e => {
  //   setSubmitOutput(e);
  //   console.log(submitOutput);
  // }
  async function apiGet(){
    
    const response = await fetch("http://127.0.0.1:8080/compile", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
        "Authorization": `bearer ${token}`
      },
      body: JSON.stringify({
        code: code,
        language: selectedvalue,
        standardIn: inp
      })
    // }) .then(response => {
    //   const c = (response.json())
    //   console.log(c);
    //   return response.json();
    // }).catch(error => alert(error.message));
  })
  const v = await(response.json());
  setoutputfunc(v.output);
  console.log(v.output)
  console.log(v);
}

async function apiSubmit(props){
    
  const response = await fetch("http://127.0.0.1:8080/submit", {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
      "Authorization": `bearer ${token}`
    },
    body: JSON.stringify({
      code: code,
      language: selectedvalue,
      standardIn: inp
      // qid:props.quesid

    })
  // }) .then(response => {
  //   const c = (response.json())
  //   console.log(c);
  //   return response.json();
  // }).catch(error => alert(error.message));
})
v = await(response.json());
setoutputfunc(v.output);
//setSubmitOutputfunc(v.output);
console.log(v.output)
console.log(v);

}
  
    return (
     <div>
        <div className="dropdown">
        <Dropdown options={plang}  value={selectedvalue} onChange={Drophandlechange} placeholder="Select an option" />
        </div>
       <br/> <hr />
  <CodeCompiler  onChange={handleEditorChange}/>
        <div class="container-fluid">
      
      
      <div class="col align-self-start">
       

      <Field id="stdin" className="title-input" placeholder="Inputs (seperated by an ' | ' symbol)" onChange={ handleChange }  
      />
     <div style={{display:"flex"}}>
       
     {/* <Button id="compile" onClick={apiGet} className="button" text="Run"/> */}
     <button type='button'className="buttonsubmit" onClick={apiGet}>Compile</button> 
{/*      
        <Button className="buttonsubmit" text="Submit"/> */}
        <button type='button' className='buttonsubmit' onClick={apiSubmit}>Submit</button>
        
     </div>
      </div>
    </div>
    <Output showOutput={output}/> 
    {/* <Output showOutput={submitOutput}/> */}
    
    {/* <div><h1>{output}</h1></div> */}

</div>
    )
}
export default DrpDwnSection;