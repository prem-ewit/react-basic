import React from 'react'

// First way of destructuring props
/*const DestructuringWithProps = ({name,alias}) => {
    return <h1>Welcome Destructuring Sample {name} a.k.a. {alias}</h1>
}*/

const DestructuringWithProps = (props) => {
    console.log(props);
    const {name,alias} = props
    return <h1>Welcome Destructuring Sample {name} a.k.a. {alias}</h1>
}

export default DestructuringWithProps