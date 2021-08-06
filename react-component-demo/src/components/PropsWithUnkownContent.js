import React from 'react'

const PropsWithUnkownContent = (props) => {
console.log(props);
// Will always return single html element.
return (
    <div>
            <h1>Hello {props.name}</h1>
            {props.children}
    </div>
   )
}

export default PropsWithUnkownContent;