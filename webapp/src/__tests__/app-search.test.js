import React from 'react'
import { render, getByText, screen, toBeInTheDocument, getByAltText, getAllByText, getByLabelText, fireEvent, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../components/App'

it('should search for name when Enter pressed', async () => {
    
    // Given mock data
    const ninjas = [
        {
            name: 'foo'
        },
        {
            name: 'bar'
        }
    ]

    const mockDataFn = function() {
        return ninjas;
    } 
    const {findByText} = render(< App getNinjas={mockDataFn} />);

    // Expect all ninjas to be rendered, and search input to be blank

    const input = screen.getByLabelText(/name/i)
    expect(input.value).toBe('')

    const foo = await screen.findByText(/foo/i);
    const bar = await screen.findByText(/bar/i);
    expect(foo).toBeInTheDocument();
    expect(bar).toBeInTheDocument();
    

    // When searched
    fireEvent.change(input, {target: {value: 'foo'}})
    fireEvent.keyPress(window, {key: 'Enter', code: 'Enter'})

    // Then expect only search results
    const searchFoo = await screen.findByText(/foo/);
    const searchBar = await screen.findByText(/bar/);
    expect(searchBar).toBe(null);
    expect(searchFoo).toBeInTheDocument();

})