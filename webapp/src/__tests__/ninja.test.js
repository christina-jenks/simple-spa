import React from 'react'
import { render, getByText, screen, toBeInTheDocument, getByAltText, getAllByText } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Ninja from '../components/Ninja'
import NinjaSocials from '../components/NinjaSocials'
import {gitHubLink, linkedInLink, twitterLink, stackOverflowLink} from '../utils/social'


it('renders img with alt as ninja name', () =>{
    const ninja = {
        name: "Foo Bar"
    }
    const {getByAltText} = render(<Ninja ninja={ninja} />);
    expect(getByAltText(ninja.name)).toBeInTheDocument();
});

it('renders name', () => {
    const ninja = {
        name: "Pooh Bear"
    }
    render(<Ninja ninja={ninja} />);
    expect(screen.getByText(new RegExp(ninja.name, 'ig'))).toBeInTheDocument();
});

it('renders office location', () => {
    const ninja = {
        office: "some office"
    }
    render(<Ninja ninja={ninja} />);
    expect(screen.getByText(new RegExp(ninja.office, 'ig'))).toBeInTheDocument();
});

it('renders a default location if no office', () => {
    const ninja = {
        office: null
    }
    render(<Ninja ninja={ninja} />);
    expect(screen.getByText(/It's a secret!/ig)).toBeInTheDocument();
});

it('renders link to github if present', () => {
    const ninja = {
        gitHub: 'someusername'
    }
    const {getByAltText} = render(<NinjaSocials ninja={ninja} />);
    expect(getByAltText('gitHub').closest('a')).toHaveAttribute('href', gitHubLink(ninja.gitHub));
});

// it('renders link to linkedIn if present', () => {
//     const ninja = {
//         linkedIn: '/in/someusername'
//     }
//     render(<Ninja ninja={ninja} />);
//     expect(screen.getByText(new RegExp(ninja.linkedIn, 'gi'))).toBeInTheDocument();
// });

// it('renders link to twitter if present', () => {
//     const ninja = {
//         twitter: '@someusername'
//     }
//     render(<Ninja ninja={ninja} />);
//     expect(screen.getByText(new RegExp(ninja.twitter, 'gi'))).toBeInTheDocument();
// });

// it('renders link to stackOverflow if present', () => {
//     const ninja = {
//         stackOverflow: '12345'
//     }
//     render(<Ninja ninja={ninja} />);
//     expect(screen.getByText(new RegExp(ninja.stackOverflow, 'gi'))).toBeInTheDocument();
// });