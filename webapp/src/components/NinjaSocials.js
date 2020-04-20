import React from 'react'
import {gitHubLink, linkedInLink, twitterLink, stackOverflowLink} from '../utils/social'
export default function NinjaSocials(props) {
    const socials = [];
    const ninja = props.ninja;
    if(ninja.gitHub) socials.push(<li key={ninja.gitHub}><a href={gitHubLink(ninja.gitHub)} ><img src="/img/github.png" alt="gitHub" /></a></li>)
    return(
        <ul>
            {socials}
        </ul>
    )
}