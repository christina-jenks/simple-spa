import { render, getByText, screen, toBeInTheDocument } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Ninjas from '../components/Ninjas'
import React from 'react'

it('renders message if no ninjas', () => {
    const { result } = render(<Ninjas ninjas={[]} />);
    expect(screen.getByText('No ninjas found!')).toBeInTheDocument(); // this is changeable later
});