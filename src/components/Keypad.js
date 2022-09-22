// Code Keypad Component Here
import React from "react"

function Keypad (){
    function enterPassword(){
        console.log("Entering password...");
    }
    return (
        <div>
            <input type="password" onChange={enterPassword}></input>
        </div>
    )
}

export default Keypad;