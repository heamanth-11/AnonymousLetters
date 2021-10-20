import React from "react"
import Envelope from "./Assets/message-1039108_640.jpg"

function Letter(props){

   const styles = {
    zIndex:"-1",
    display:"inline",
    position:"absolute",
    right:"50%",
     margin:"10% 0"
   }

   
    return<div className="container">
    <div className="row">
      <div className="col-md">
        <img className='  envp' src={Envelope} alt="" />
        <h1 style={styles}>{props.Dear}</h1>
      </div>
    </div>
  </div>
}

export default Letter;