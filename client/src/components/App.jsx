import {React} from "react"
import Header from "./Header"
import Letter from "./Letters"
import About from "./About"
import Contact from "./Contatct"
import Faq from "./Faq"
import LetterPost from "./LetterPost"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import LegalNotice from "./LegalNotice"
import PopulateLetters from "./PopulateLetters"
import {realdata} from "../data"



async function App(){
const daata =  realdata()
await console.log(daata)
return <Router>
     <div>
    <Header />
      <Switch>
      <Route exact path="/" component={PopulateLetters}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/faq" component={Faq}/>
      <Route path="/write-a-letter" component={LetterPost}/>
      <Route path="/legalnotice" component={LegalNotice}/>
     
      </Switch>
</div>
</Router>

}

export default App;