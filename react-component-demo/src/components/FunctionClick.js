
import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log("Button clicked!");
    }
    // Here we are passing function as argument. We want handler to be function not function call
    return (
        <div>
            <button onClick={clickHandler}>Click Me</button>
        </div>
    )
}

export default FunctionClick
