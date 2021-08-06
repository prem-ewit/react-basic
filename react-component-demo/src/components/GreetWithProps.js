import React from 'react'

const GreetWithProps = (props) => {
console.log(props);
    return <h1>Welcome {props.name} a.k.a. {props.alias}</h1>
}

export default GreetWithProps