import React from 'react'
import NinjaSocials from './NinjaSocials'

export default function Ninja(props) {
    const ninja = props && props.ninja;
    return (
        <section className='ninja-portrait' >
            <figure>
                <img alt={ninja.name} src={ninja.imagePortraitUrl} className='portrait' />
            </figure>
            <div className='ninja-details'>
                <div className='ninja-id' >
                    <p tabIndex='0' >{ninja.name}</p>
                    <p tabIndex='0' >Office: {ninja.office || "It's a secret!"}</p>
                </div>
                {
                    (() => {
                        if(ninja.gitHub || ninja.twitter || ninja.linkedIn || ninja.stackOverflow) {
                            return (
                                <div className='ninja-socials' >
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