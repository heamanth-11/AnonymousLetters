import {React} from "react"
import { Link } from "react-router-dom";

function LetterPost(){
    const heightChange = { height:"2.5rem"}
    const changecolor = ()=> document.getElementsByClassName("input").style.backgroundColor="white";
    return <div className="letterPost">
        

        <form >
            <h6>Dear...</h6>
            <label htmlFor="to"> e.g. 'my grandmother', 'the universe' or 'my future self'</label>
            <input autoFocus style={heightChange} className="input" id="to" type="text" name="to" /><br />
            <br />
            <label htmlFor="message" style={{color:"black"}}>Write Your Letter Here... *</label><br />
            <textarea className="input" name="message" id="message"  rows='5' ></textarea><br />
            <br /><h6>From... *</h6>
            <label htmlFor="from" >Keep your name here anonymous <br />e.g. 'Someone you used to know' or 'your son </label>
            <input type="text" style={heightChange} id='from' className="input" name="from" /><br />
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