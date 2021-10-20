import React from "react"
import Letter from "./Letters"
import Data from "../data"

function PopulateLetters(){

 

    return <div>
            {Data.map(letterData => <Letter Dear={letterData.name} />)}
    </div>
}

export default PopulateLetters;
 