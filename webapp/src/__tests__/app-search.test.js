import React from 'react'
import { render, getByText, screen, toBeInTheDocument, getByAltText, getAllByText, getByLabelText, fireEvent } from '@testing-library/react'
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

    // const mockData = new Promise((resolve, reject) => {
    //     resolve(ninjas);
    // });
    App.getNinjas = jest.fn();
    App.getNinjas.resolve(ninjas);
    // const mockFetch = Promise.resolve({
    //     json: () => Promise.resolve(ninjas),
    //     ok: {}
    // }).catch(() => {});
    
    // global.fetch = jest.fn();//.mockImplementation( () => {mockFetch})

    // And given app setup with mock data and no input
    render(< App />);
    const input = screen.getByLabelText(/name/i)
    expect(screen.getByText(/foo/i)).toBeInTheDocument();
    expect(screen.getByText(/bar/i)).toBeInTheDocument();
    expect(input.value).toBe('')

    // When
    fireEvent.change(input, {target: {value: 'foo'}})
    fireEvent.keyPress(window, {key: 'Enter', code: 'Enter'})

    // Then
    expect(screen.getByText(/foo/)).toBeInTheDocument()

    // global.fetch.mockClear();
})