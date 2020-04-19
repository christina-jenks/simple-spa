import React from 'react'

export default function Ninja(props) {
    const ninja = props && props.ninja;
    return (
        <section key={ninja.name}>
            <img alt={ninja.name} src={ninja.imagePortraitUrl} />
            <div>
                <h2>{ninja.name}</h2>
                <h3>Office: {ninja.office}</h3>
            </div>
            <div>
            
            </div>
        </section>
    )
}