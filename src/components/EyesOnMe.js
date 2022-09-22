// Code EyesOnMe Component Here
import React from "react";


function EyesOnMe(){

    function blur(){
        console.log("Good!");
    }

    function focus(){
        console.log("Hey! Eyes on me!");
    }

    return (
        <div>
            <button onFocus={blur} onBlur={focus}>Eyes on me</button>
        </div>
    )
}
export default EyesOnMe