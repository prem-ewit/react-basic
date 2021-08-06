import React, { Component } from 'react'

 class HoverCounter extends Component {

    constructor(props) {
        super(props)

        this.state = {
             count : 0
        }
    }
    incrementCount = () => {
        this.setState(prevState =>{
            return {count : prevState.count + 1}
        })
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <h1 onMouseOver={this.incrementCount}>Hover {count} times</h1>
            </div>
        )
    }
}

export default HoverCounter
