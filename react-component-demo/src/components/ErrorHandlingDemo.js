import React from 'react'

function ErrorHandlingDemo({heroName}) {
    if(heroName === 'joker'){
        throw new Error('Not a hero!!');
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default ErrorHandlingDemo
