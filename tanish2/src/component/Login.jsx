import React from "react";
import Input from "./Input"
import Button from "./Button"

function Login(){
    return(<form classame="form">

    <Input 
    type="text"
    placeholder="username" />
     <Input 
    type="password"
    placeholder="password" />
    <Button 
    text="Login" />
    
    
</form>)
    
}
export default Login;