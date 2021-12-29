// import React from 'react'
// import CodeMirror from '@uiw/react-codemirror';


// export default function CodeCompiler() {
//   return (
//     <CodeMirror
//       value="console.log('hello world!');"
//       height="300px"
//       lineNumbers="true"
//           tabSize="2"
//           spellcheck="true"
//           autocorrect="true"
//           value= "Code Here"
//           mode= "javascript"
//         //   theme= "seti"
//           matchBrackets= "true"
//           autoCloseBrackets="true"
//           closeBrackets= "true"
//           style={{color:"black",fontSize:"14px"}}
//     //   extensions={[javascript({ jsx: true })]}
//       onChange={(value, viewUpdate) => {
//         console.log('value:', value);
//       }}
//     />
//   );
// }

import React from "react";
import ReactDOM from "react-dom";

import Editor from "@monaco-editor/react";
let code ="";
export default function CodeCompiler(props) {
  return (
   <Editor
   height="300px" 

      lineNumbers="true"
         tabSize="2"
          spellcheck="true"
          autocorrect="true"
          defaultvalue= "Code Here"
          mode= "javascript"
         theme= "seti"
          matchBrackets= "true"
          autoCloseBrackets="true"
          closeBrackets= "true"
          
          style={{color:"black",fontSize:"14px" }}
     defaultLanguage="javascript"
     defaultValue="// Code Here"
     onChange={props.onChange}
   />
  );
}