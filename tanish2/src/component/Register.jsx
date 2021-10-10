import React from "react";
import Input from "./Input"
import Button from "./Button"

function Register(){
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
    
    <Button 
    text="Login" />
    
    
</form>)
    
}
export default Register;