import {React, useState} from "react"
import axios from "axios"


function LetterPost(){
    const heightChange = { height:"2.5rem"}
    // const changecolor = ()=> document.getElementsByClassName("input").style.backgroundColor="white";
    const [to,setTo] = useState("someOne");
    const [message ,setMessage] = useState("hi there");
    const [from , setFrom] = useState("me");
  
  const submitHandler =(e)=>{
     e.preventDefault();
     
     const data = {to,message,from}
     console.log(data)
    axios.post("http://localhost:8000/insert",{to:to,message:message,from:from}).then(response => console.log(response)).catch((err)=>{
         console.log(err)
     })

   
  }
    
    return <div className="letterPost">
        

        <form onSubmit={submitHandler}>
            <h6>Dear...</h6>
            <label htmlFor="to"> e.g. 'my grandmother', 'the universe' or 'my future self'</label>
            <input autoFocus style={heightChange} className="input" id="to" type="text" name="to" onChange={(e)=>{setTo(e.target.value)}} /><br />
            <br />
            <label htmlFor="message" style={{color:"black"}}>Write Your Letter Here... *</label><br />
            <textarea className="input" name="message" id="message"  rows='5'onChange={(e)=>{setMessage(e.target.value)}} ></textarea><br />
            <br /><h6>From... *</h6>
            <label htmlFor="from" >Keep your name here anonymous <br />e.g. 'Someone you used to know' or 'your son </label>
            <input type="text" style={heightChange} id='from' className="input" name="from" onChange={(e)=>{setFrom(e.target.value)}} /><br />
        <br />     <button className='lettersubmit' type="submit">SUBMIT</button><br />
        </form>
        <br />
        <hr />
        <br />
        <br /><h6>Not sure what to write? Click here for some <a href="/">letterspiration. </a> </h6><br />
        <br />
        <hr  />
       <p className="p" >EVERY LETTER PUBLISHED IS COMPLETELY ANONYMOUS. FOR MORE INFO VISIT OUR <a href="/faq">FREQUENTLY ASKED QUESTIONS</a> OR READ OUR <a href="/legalnotice">LEGAL NOTICE.</a> </p>
        

    </div>
}

export default LetterPost;