import React from 'react'
import NinjaSocials from './NinjaSocials'

export default function Ninja(props) {
    const ninja = props && props.ninja;
    return (
        <section key={ninja.name}>
            <img alt={ninja.name} src={ninja.imagePortraitUrl} />
            <div>
                <div>
                    <h2>{ninja.name}</h2>
                    <h3>Office: {ninja.office || "It's a secret!"}</h3>
                </div>
                {
                    (() => {
                        if(ninja.gitHub || ninja.twitter || ninja.linkedIn || ninja.stackOverflow) {
                            return (
                                <div>
                                    <NinjaSocials ninja={ninja} />
                                </div>
                            )
                        }
                    })()
                }
            </div>
        </section>
    )
}