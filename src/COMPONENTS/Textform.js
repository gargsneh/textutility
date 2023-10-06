import React from 'react'
import { useState } from 'react'


export default function Textform(props) {
    const handleUpcase = ()=>{
        console.log("upper case was clicked" + Text);
        let newText = Text.toUpperCase();
        setText(newText)
    }
    const handleOnchange = (event)=>{
        console.log("on change"); 
        setText (event.target.value)

    }
    const handleLocase = ()=>{
        console.log("lower case was clicked" + Text);
        let newText = Text.toLowerCase();
        setText(newText)
    }
    const [Text, setText] = useState("Enter here");
    

  return (
    <>
            <div>
        <h1>{props.heading}</h1>
        <div className ="mb-3">
        <label htmlFor="mybox" className="form-label">Example: Textarea</label>
        <textarea className ="form-control" value = {Text} onChange ={handleOnchange} id="mybox" rows="5"></textarea>
        </div>

        <button className ="btn btn primary"  onClick={handleUpcase}>Convert to Uppercase</button>
        <button className ="btn btn primary"  onClick={handleLocase}>Convert to lowercase</button>



        </div>

        <div className='container my - 5'>
            <h1> SUMMARY OF YOUR TEXT</h1>
           
            <p>{Text.split(" ").length} Words and {Text.length}  characters</p>
           <h6> Time to read </h6>
            <p>{0.008 * Text.split(" ").length }  </p>
        </div>
        </> 
        
  )
}
