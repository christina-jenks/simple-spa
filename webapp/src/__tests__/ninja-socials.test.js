import React from 'react'
import { render, getByText, screen, toBeInTheDocument, getByAltText, getAllByText } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Ninja from '../components/Ninja'
import NinjaSocials from '../components/NinjaSocials'
import {gitHubLink, linkedInLink, twitterLink, stackOverflowLink} from '../utils/social'

it('renders link to github if present', () => {
    const ninja = {
        gitHub: 'someusername'
    }
    const {getByAltText} = render(<NinjaSocials ninja={ninja} />);
    expect(getByAltText('gitHub').closest('a')).toHaveAttribute('href', gitHubLink(ninja.gitHub));
});

it('renders link to linkedIn if present', () => {
    const ninja = {
        linkedIn: '/in/someusername'
    }
    const {getByAltText} = render(<NinjaSocials ninja={ninja} />);
    expect(getByAltText('linkedIn').closest('a')).toHaveAttribute('href', linkedInLink(ninja.linkedIn));
});

it('renders link to twitter if present', () => {
    const ninja = {
        twitter: '@someusername'
    }
    const {getByAltText} = render(<NinjaSocials ninja={ninja} />);
    expect(getByAltText('twitter').closest('a')).toHaveAttribute('href', twitterLink(ninja.twitter));
});

it('renders link to stackOverflow if present', () => {
    const ninja = {
        stackOverflow: '12345'
    }
    const {getByAltText} = render(<NinjaSocials ninja={ninja} />);
    expect(getByAltText('stackOverflow').closest('a')).toHaveAttribute('href', stackOverflowLink(ninja.stackOverflow));
});