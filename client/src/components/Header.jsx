import React from "react";
import {BrowserRouter as Router,Link} from "react-router-dom";
function Header(){

    return  <div className="nav">

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand log" href="/">Anonymous Letters</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto ">
      <li className="nav-item ">
        <a className="nav-link" href="/" >Letters </a>
      </li>
      <Link className="nav-link" to="/write-a-letter">
      <li className="nav-item">
        Write a  Letter
      </li>
      </Link>
      
      <Link className="nav-link" to="/about">
      <li className="nav-item">
       About
      </li>
      </Link>
      
    </ul>
   
  </div>
 
</nav>
 
 <div className="paded" >
 <h6 className="pad" > Anonymous Letters is an online platform for people to submit their letters anonymously. Because everyone has a letter to write.</h6>
 </div>

    
    </div> 

}

export default Header