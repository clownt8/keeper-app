import React from "react";
import Input from "./Input"


function Register(props){
    return(<form classame="form">

    <Input 
    type="text"
    placeholder="username" />

     <Input 
    type="password"
    placeholder="password" />
    
    <Input 
    type="password"
    placeholder="confirm password" />
    
    <button onClick={props.y1} type="submit">Register</button>
    
    
</form>)
    
}
export default Register;