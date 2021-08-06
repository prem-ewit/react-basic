import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message : 'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message : 'Good Bye!'
        })
    }
    clickHandlerWithArrowFunction = () =>{
        this.setState({
            message : 'Again Good Bye...'
        })
    }

    render() {
        return (
            <div>
                <h1> Event Binding Demo - {this.state.message}</h1>
                {/* Approach -1
                <button onClick={this.clickHandler.bind(this)}>Click Event</button>*/}
                {/* Approach -2
                <button onClick={() => {this.clickHandler()}}>Click Event</button>
                */}
                 {/* Approach -3 - Bind in constructor */}
                <button onClick={this.clickHandler}>Click Event</button>
                {/* Approach -4 - Use Arrow function  */}
                <button onClick={this.clickHandlerWithArrowFunction}>Click Arrow</button>
            </div>
        )
    }
}

export default EventBind
