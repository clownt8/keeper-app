import React, { useState } from "react";



function Login(props){

    const[over, setover]=useState(false);
    const[user,setuser]=useState("")
    const[pass,setPass]=useState("")
   

    function over1() {
            setover(true);}
        function out1() {
            setover(false); }
            function handleusername(event){
                setuser(event.target.value)
            }
            function handlepass(event){
                setPass(event.target.value)
            }
            function handleclick(){
                 props.fetchlogininfo({user,pass})
                 
            }
           

    return(<form classame="form">
           <input  spellCheck="false" onChange={handleusername} value={user} type="text" placeholder="username" />
           <input   onChange={handlepass} value= {pass} type="password" placeholder="password"/>
   
    <button
    style={{backgroundColor: over ? "black" : "white"}}
    onMouseOver={over1}
    onMouseOut={out1}
     onClick={handleclick} type="submit">login</button>
    
</form>)
    
}
export default Login;