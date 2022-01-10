import React from "react"
import Letter from "./Letters"
import { useState,useEffect } from "react"
import axios from "axios"
 function PopulateLetters(){

const [data ,setData] = useState([])
 useEffect(()=>{
    axios.get("http://localhost:8000").then((response)=>{
      
      setData( response.data)
    })

},[])

   console.log(data)

    return <div className="row populateLetters">
        
            { data.map((letterData )=> <Letter Dear={letterData.to} key={letterData._id} />)}
    </div>
}

export default PopulateLetters;
 