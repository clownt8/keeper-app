import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";
import Login from "./Login";
import Register from "./Register";
var userisregister = true;
var log = false ;
function App() {
    return(
       <div className="container"> 
       {
         userisregister ? (log ? (<div> 
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
                :  (<Login />))
            : <Register />
            }
       </div>     
)}

export default App;