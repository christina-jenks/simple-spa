import React from 'react'
import {gitHubLink, linkedInLink, twitterLink, stackOverflowLink} from '../utils/social'
export default function NinjaSocials(props) {
    const socials = [];
    const ninja = props.ninja;
    if(ninja.gitHub) socials.push(<li key={'gitHub:'+ninja.gitHub}>
        <a href={gitHubLink(ninja.gitHub)} >
            <img src="/img/gitHub.png" alt="gitHub" className='social-icon' />
        </a>
    </li>)
    if(ninja.linkedIn) socials.push(<li key={'linkedIn:'+ninja.linkedIn}>
        <a href={linkedInLink(ninja.linkedIn)} >
            <img src="/img/linkedIn.png" alt="linkedIn" className='social-icon'/>
        </a>
    </li>)
    if(ninja.twitter) socials.push(<li key={'twitter:'+ninja.twitter}>
        <a href={twitterLink(ninja.twitter)} >
            <img src="/img/twitter.png" alt="twitter" className='social-icon'/>
        </a>
    </li>)
    if(ninja.stackOverflow) socials.push(<li key={'stackOverflow:'+ninja.stackOverflow}>
        <a href={stackOverflowLink(ninja.stackOverflow)} >
            <img src="/img/stackOverflow.png" alt="stackOverflow" className='social-icon'/>
        </a>
    </li>)
    return(
        <ul>
            {socials}
        </ul>
    )
}