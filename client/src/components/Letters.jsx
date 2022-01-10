import React from "react"
import Envelope from "./Assets/message-1039108_640.jpg"

function Letter(props){

 onclick = (key)=>{


 }

   
    return<div className=" letters col-md-6 col-sm-6 col-6">
      
      <div className="letter-text">
      <button  onClick={
        onclick(props.key)
      }>
      <h1 >{props.Dear}</h1>
      </button>
    
      </div>
     
      
      <img className=' letterimg envp' src={Envelope} alt="" />
   
    
       
      </div>
  
}

export default Letter;