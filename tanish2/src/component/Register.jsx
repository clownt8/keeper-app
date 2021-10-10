import React, { useState } from "react";

function Register(props){
  
    const[over, setover]=useState(false);
    const[user,setuser]=useState("")
    const[pass,setPass]=useState("")
    const[confirmpass,setconfirmPass]=useState("")
   
 function over1() {
        setover(true);
    }
    function out1() {
        setover(false);
    }
    function handleusername(event){
        setuser(event.target.value)
    }
    function handlepass(event){
        setPass(event.target.value)
    }
    function handleconfirmpass(event){
        setconfirmPass(event.target.value)
    }
    
    function handleclick(){
        if(pass.length!==0 && confirmpass!== 0 && pass===confirmpass){
           
            {props.fetchinfo({user,pass})}
           

        }
    }
      
     return(<form classame="form">
         <input  spellCheck="false" onChange={handleusername} value={user} type="text" placeholder="username" />
         <input   onChange={handlepass} value= {pass} type="password" placeholder="password"/>
         <input  onChange={handleconfirmpass} value= {confirmpass} type="password" placeholder="confirm password"/>
   
    
    <button
    style={{backgroundColor: over ? "black" : "white"}}
    onMouseOver={over1}
    onMouseOut={out1}
     onClick={handleclick} type="submit">Register</button>
</form>)
    
}
export default Register;