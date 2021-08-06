import React, { Component } from 'react'

 class ClickCounter extends Component {

    constructor(props) {
        super(props)

        this.state = {
             count : 0
        }
    }


    incrementCounter = () => {
            this.setState(prevState => {
               return {count : prevState.count + 1}
            })
    }



    render() {
        return (
            <div>
                <h1> Click counter demo : Clicked {this.state.count} times </h1>
                <br/>
                <button onClick = {this.incrementCounter}> clicked {this.state.count} times</button>
            </div>
        )
    }
}

export default ClickCounter
