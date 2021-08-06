import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

 class ComponentC extends Component {
    render() {
        return (
            <UserConsumer>
                {userName => {
                    return (
                        <div>
                             <h1>Hello {userName}</h1>
                         </div>
                    )
                }}
         </UserConsumer>
        )
    }
}

export default ComponentC
