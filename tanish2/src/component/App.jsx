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
  function x1(){
    setx(true);
  }

  
  function y1(){
    sety(true);
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
                x1={x1}/>))
            : <Register 
            y1={y1} />
            }
       </div>     
)}

export default App;