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