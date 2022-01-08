 import axios from "axios"
 const Data = [
    {name : "virat" , message : "be the best you can be "},
    {name : "rohit" , message : "sun will rise again tommorrow"},
    {name : "Dhoni" , message : "i don't see any in em"},
    {name : "kane Williamson", message : "its me who should decide , whether i smile or cry . i prefer smile " },
    {name : "Afridi" , message : " Age is just a number"},
    {name : "de villiers" , message : " ipl is harder than world cup"}

]
 function realdata(){
    axios.get("http://localhost:8000").then((response)=>{
        console.log(response)
        return response.data
    })

    

}
export default Data;
export {realdata}