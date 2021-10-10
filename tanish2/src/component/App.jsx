import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import Login from "./Login";
import Register from "./Register";
import CreateArea from "./CreateArea";

function App() {

  const[x,setx]= useState(false);
  const[y,sety]= useState(false);
  const[backuser,setbackuser]=useState("")
  const[backpass,setbackPass]=useState("")
  const [notes, setNotes] = useState([]);
  
  function fetchinfo(p) {
    setbackuser(p.user);
    setbackPass(p.pass);
    sety(true);
}
  function fetchlogininfo(p) {
   
    if(p.user===backuser && p.pass===backpass){
      setx(true);
    }
 
  }
 

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

 
    return(
       <div className="container"> 
       {
         y? (x ? (<div> 
                <Header />
                <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })} 
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