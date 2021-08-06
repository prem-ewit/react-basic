import React,{Component} from 'react'

//props is read only, can not be changed
class GreetClassComponentWithProps extends Component{
    render(){
        return <h1>Welcome {this.props.name} a.k.a {this.props.alias}</h1>
    }
}

export default GreetClassComponentWithProps