import React from 'react'

export default function Ninja(props) {
    
    if(props && props.ninja && props.ninja.name) {
        const ninja = props.ninja;
        return (
            <section key={ninja.name}>
                <h2>{ninja.name}</h2>
            </section>
        )
    } else {
        return null;
    }
}