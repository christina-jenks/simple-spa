import { render, getByText, screen, toBeInTheDocument } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Ninja from '../components/Ninja'
import React from 'react'

it('renders img with alt as ninja name', () =>{
    const ninja = {
        name: "Foo Bar"
    }
    const {getByAltText} = render(<Ninja ninja={ninja} />);
    expect(getByAltText(ninja.name)).toBeInTheDocument();
})