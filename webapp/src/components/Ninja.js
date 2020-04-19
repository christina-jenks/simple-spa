import React from 'react'

export default function Ninja(props) {
    const ninja = props && props.ninja;
    return (
        <section key={ninja.name}>
            <img alt={ninja.name} src={ninja.imagePortraitUrl} />
            
        </section>
    )
}