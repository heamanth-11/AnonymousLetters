import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";

function About(){

    return <div >
        <div  className="about">
        <h1>Anonymous Letters</h1>
        <p>Letters Anonymous is an online community for people to submit their letters anonymously.</p><br />
       <p>There is something honest and pure about writing a letter. Letters have an intentional reader and are crafted with purpose, time and dignity. They can be playful, serious, funny, nostalgic, parodical, profound, poignant or confessionary. They can be open letters to society or personal letters to the people you love, miss or never met.</p><br />
       <p> Letters may be addressed to someone else but they are a sounding board for ourselves. In a world where we often struggle to connect and listen to each other, letters can fill that gap, whether you choose to send them anywhere or not. </p><br />
       <p> Everyone has a letter to write. To yours <a href="/write a letter"> clicl Here </a> </p><br />
       <p>**Please note that this website is updated at least once a month. However, there is currently a substantial backlog due to an increase in letters received, so your letter may take up to six months to appear on the site (as of February 2021).**</p><br />
       <p>To read all published letters, visit the <a href="/">letters page </a></p><br />
       <p>For letter-writing tips visit the <a href="/">letterspiration</a> page.</p><br />
       <p>If you would like to get in touch please email <span style={{fontWeight:"bold"}}>heamanthofficial@gmail.com</span> or fill out this <a href="/contact">contact form</a>.</p><br />
       <p>You can find <a href="/faq">Frequently Asked Questions</a> here.</p><br />      
        
        </div>
        
        <Footer/>
    </div>
   
}

export default About;