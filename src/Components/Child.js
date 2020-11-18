import React from 'react'

function Child(props) {
    return (
        <div>
            <button onClick= { ()=>props.getHandler('child')}>Parant</button>
        </div>
    )
}

export default Child
