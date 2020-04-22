import React from 'react'
import {gitHubLink, linkedInLink, twitterLink, stackOverflowLink} from '../utils/social'
export default function NinjaSocials(props) {
    const socials = [];
    const ninja = props.ninja;
    if(ninja.gitHub) socials.push(
        <a key={'gitHub:'+ninja.gitHub} href={gitHubLink(ninja.gitHub)} >
            <img src="/img/gitHub.png" alt="gitHub" className='social-icon' />
        </a>)
    if(ninja.linkedIn) socials.push(
        <a key={'linkedIn:'+ninja.linkedIn} href={linkedInLink(ninja.linkedIn)} >
            <img src="/img/linkedIn.png" alt="linkedIn" className='social-icon'/>
        </a>)
    if(ninja.twitter) socials.push(
        <a key={'twitter:'+ninja.twitter} href={twitterLink(ninja.twitter)} >
            <img src="/img/twitter.png" alt="twitter" className='social-icon'/>
        </a>)
    if(ninja.stackOverflow) socials.push(
        <a key={'stackOverflow:'+ninja.stackOverflow} href={stackOverflowLink(ninja.stackOverflow)} >
            <img src="/img/stackOverflow.png" alt="stackOverflow" className='social-icon'/>
        </a>)
    return(<>{socials}</>)
}