import React from "react";
import Input from "./Input"


function Login(props){
    return(<form classame="form">

    <Input 
    type="text"
    placeholder="username" />
     <Input 
    type="password"
    placeholder="password" />
   
    <button onClick={props.x1} type="submit">login</button>
    
</form>)
    
}
export default Login;