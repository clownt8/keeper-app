import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";
import Login from "./Login";
import Register from "./Register";

function App() {

  const[x,setx]= useState(false);
  const[y,sety]= useState(false);
  const[backuser,setbackuser]=useState("")
  const[backpass,setbackPass]=useState("")
  
  
  function fetchinfo(p) {
    setbackuser(p.user);
    setbackPass(p.pass);
    sety(true);
}
  function fetchlogininfo(p) {
   
    if(p.user===backuser && p.pass===backpass){
      setx(true);
    }
 console.log(p.user)
    console.log(p.pass)
  }

 

    return(
       <div className="container"> 
       {
         y? (x ? (<div> 
                <Header />
                {notes.map((detail1)=>
                  (<Note
                  key={detail1.key}
                  title={detail1.title}
                  content={detail1.content}
                  />)
                )
                }    
                <Footer />
                </div>)
                :  (<Login 
                  fetchlogininfo={fetchlogininfo}
               />))
            : <Register 
            fetchinfo={fetchinfo}
            />
            }
       </div>     
)}

export default App;