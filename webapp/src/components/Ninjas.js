import React from 'react'

function NoNinjasFound(props) {
    return (
        <p>No ninjas found!</p>
    )
}

export default function Ninjas(props) {

    const ninjas = props.ninjas ? props.ninjas : []
    return (
        
            <NoNinjasFound />
        
    )
}