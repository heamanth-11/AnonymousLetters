import React from "react"
import Letter from "./Letters"
import Data from "../data"
import { useState,useEffect } from "react"
import axios from "axios"
function PopulateLetters(){

const [data ,setData] = useState([])
useEffect(()=>{
    axios.get("http://localhost:8000").then((response)=>{
        console.log(response)
        setData( response.data)
    })

},[])

    return <div className="row populateLetters">
        
            {data.map((letterData )=> <Letter Dear={letterData.to} />)}
    </div>
}

export default PopulateLetters;
 