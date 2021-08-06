import React, { Component } from 'react'

class Counter extends Component {

    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick = { () => this.increment() }>Increment</button>
            </div>
        )
    }
// Async call happens. If some operation depends on completion of state change then we can use callback function for next method.
 increment1(){
        this.setState({
            count : this.state.count + 1
        })
        console.log(this.state.count);
    }

    increment(){
        this.setState({
            count : this.state.count + 1
             },
            () => {console.log("Callback - " +this.state.count);
         })
        console.log(this.state.count);
    }
}

export default Counter
