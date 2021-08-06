import React from 'react'
import Hello from './HelloWithJSX';

const HelloWithoutJsx = () => {

    //Both these return will works..
    //return React.createElement('div', null, <h1>Hello Without Jsx</h1>)
    return React.createElement('div',
    {'id': '1', className: 'dummy'},
    React.createElement('h1',null,'Hello Without JSX')
   )

}

export default HelloWithoutJsx;