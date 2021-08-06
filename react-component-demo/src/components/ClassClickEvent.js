import React, { Component } from 'react'


class ClassClickEvent extends Component {

    clickHandler(){
            console.log("Button Clicked!!!!!!");
    }
    render() {
        return (
            <div>
                <h1>Class click event</h1>
                <button onClick={this.clickHandler}>Click here</button>
            </div>
        )
    }
}

export default ClassClickEvent
