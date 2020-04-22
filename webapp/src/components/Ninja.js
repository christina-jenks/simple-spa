import React from 'react'
import NinjaSocials from './NinjaSocials'

export default function Ninja(props) {
    const ninja = props && props.ninja;
    return (
        <section className='ninja-portrait' >
            <img alt={ninja.name} src={ninja.imagePortraitUrl} className='portrait' />
            <div className='ninja-details'>
                <div className='ninja-id' >
                    <h2>{ninja.name}</h2>
                    <h3>Office: {ninja.office || "It's a secret!"}</h3>
                </div>
                {
                    (() => {
                        if(ninja.gitHub || ninja.twitter || ninja.linkedIn || ninja.stackOverflow) {
                            return (
                                <div class='ninja-socials' >
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