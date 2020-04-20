import React from 'react'
import {gitHubLink, linkedInLink, twitterLink, stackOverflowLink} from '../utils/social'
export default function NinjaSocials(props) {
    const socials = [];
    const ninja = props.ninja;
    if(ninja.gitHub) socials.push(<li key={ninja.gitHub}><a href={gitHubLink(ninja.gitHub)} ><img src="/img/gitHub.png" alt="gitHub" /></a></li>)
    if(ninja.linkedIn) socials.push(<li key={ninja.linkedIn}><a href={linkedInLink(ninja.linkedIn)} ><img src="/img/linkedIn.png" alt="linkedIn" /></a></li>)
    if(ninja.twitter) socials.push(<li key={ninja.twitter}><a href={twitterLink(ninja.twitter)} ><img src="/img/twitter.png" alt="twitter" /></a></li>)
    if(ninja.stackOverflow) socials.push(<li key={ninja.stackOverflow}><a href={stackOverflowLink(ninja.stackOverflow)} ><img src="/img/stackOverflow.png" alt="stackOverflow" /></a></li>)
    return(
        <ul>
            {socials}
        </ul>
    )
}