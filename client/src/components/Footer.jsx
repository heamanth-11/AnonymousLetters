import React from "react";
// import facebook from "./Assets/facebook-icon.png"
// import twitter from "./Assets/twitter-icon.svg"
// import instagram from "./Assets/instagram-icon.svg"


function Footer(){

    return <div claasName='Footer'>
        <hr noshade  />
        <br />
    <div className="social-media  ">  
        <a  href="https://www.instagram.com/heamanth01"> <i class="fab fa-instagram"></i> </a>   
        <a   href="https://www.facebook.com/profile.php?id=100008984559382"><i class="fab fa-facebook"></i></a> 
        <a   href="https://www.twitter.com/heamnath01"><i class="fab fa-twitter"></i> </a>
    </div>
        <div className="credits">
      <p>   ANONYMOUS LETTERS WAS DEVELOPED BY HEAMANTH; A SOFTWARE DEVELOPER, STUDENT AND FREELANCER. HE BELIEVES IN THE HEALING POWER OF HUMAN CONNECTION AND SHARING OUR EXPERIENCES IN REFLECTIVE AND RESTORATIVE WAYS.</p>
           <p> THIS WEBSITE IS CLONE OF <a style={{color:"red"}} href="https://www.lettersanonymous>com">LETTERS ANONYMOUS</a></p>
        </div>

    </div>
}

export default Footer;