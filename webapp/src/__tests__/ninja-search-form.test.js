import React from 'react'
import { render, getByText, screen, toBeInTheDocument, getByAltText, getAllByText, getByLabelText, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NinjaSearch from '../components/NinjaSearch'

it('should render name', () => {

    render(< NinjaSearch />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    
})

it('should render location', () => {

    render(< NinjaSearch />);
    expect(screen.getByLabelText(/location/gi)).toBeInTheDocument();

})

it('should render social search boxes', () => {

    render(< NinjaSearch />);
    expect(screen.getByLabelText(/git ?Hub/gi)).toBeInTheDocument();
    expect(screen.getByLabelText(/linked ?In/gi)).toBeInTheDocument();
    expect(screen.getByLabelText(/twitter/gi)).toBeInTheDocument();
    expect(screen.getByLabelText(/stack ?Overflow/gi)).toBeInTheDocument();
})