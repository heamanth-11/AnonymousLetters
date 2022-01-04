import React from "react"
import Envelope from "./Assets/message-1039108_640.jpg"

function Letter(props){

   

   
    return<div className=" letters col-md-6 col-sm-6 col-6">
      
      <div className="letter-text">
      <h1 >{props.Dear}</h1>
      </div>
     
      
      <img className=' letterimg envp' src={Envelope} alt="" />
   
      {/* OJ5BE2XIYO */}
       
      </div>
  
}

export default Letter;