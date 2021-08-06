import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './UserContext'

 class ComponentB extends Component {
    render() {
        return (
            <div>
                <h1>Component B context .. {this.context}</h1>
                <ComponentC/>
            </div>
        )
    }
}
ComponentB.contextType = UserContext

export default ComponentB
