import React from 'react'
import { Link } from 'react-router-dom'


export default function Button(props) {
    return (
        <div>
         <Link type ={props.type} class={props.className} to={props.href}>{props.text}</Link>

         {/* <button type={props.type } class={props.className} id={props.id}>{props.text}</button> */}

        </div>
    )
}