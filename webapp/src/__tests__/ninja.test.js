import { render, getByText, screen, toBeInTheDocument } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Ninja from '../components/Ninja'
import React from 'react'

it('does not render if name is missing', () => {
    const ninja = {name: null}
    const {result} = render(<Ninja ninja={ninja} />);
    expect(result).toBe(undefined);
})