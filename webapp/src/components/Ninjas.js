import React from 'react'
import Ninja from './Ninja'

function NoNinjasFound(props) {
    return (
        <p>No ninjas found!</p>
    )
}

export default function Ninjas(props) {

    const ninjas = props.ninjas ? props.ninjas : []
    console.log('ninjas: ' + JSON.stringify(ninjas));
    if(ninjas.length > 0) {
        return (
            ninjas.map(function(ninja){return <Ninja key={ninja.name || ninja.email} ninja={ninja} />})
        )
    } else {
        return <NoNinjasFound />
    }
}