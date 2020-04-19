import { render, getByText, screen, toBeInTheDocument, getByAltText } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Ninja from '../components/Ninja'
import React from 'react'

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
    const {getByText} = render(<Ninja ninja={ninja} />);
    expect(getByText((content, node) => {
        const hasText = node => new RegExp(ninja.name, 'g').test(node.innerText)
        const nodeHasText = hasText(node);
        const childrenDontHaveText = Array.from(node.children).every(
          child => !hasText(child)
        );
        return nodeHasText && childrenDontHaveText;
      })).toBe(true);//.toBeInTheDocument();
});

it('renders office location', () => {
    const ninja = {
        office: "some office"
    }
    const {getByText} = render(<Ninja ninja={ninja} />);
    expect(getByText((content, elem) => {
        return elem.innerText == ninja.office
    })).toBeInTheDocument();
});

it('renders a default location if no office', () => {
    const ninja = {
        office: null
    }
    const {getByText} = render(<Ninja ninja={ninja} />);
    expect(getByText("secret")).toBeInTheDocument();
});

it('renders link to github if present', () => {
    const ninja = {
        github: 'someusername'
    }
    const {getByText} = render(<Ninja ninja={ninja} />);
    expect(getByText(ninja.github)).toBeInTheDocument();
});

it('renders link to linkedIn if present', () => {
    const ninja = {
        linkedIn: '/in/someusername'
    }
    const {getByText} = render(<Ninja ninja={ninja} />);
    expect(getByText(ninja.linkedIn)).toBeInTheDocument();
});

it('renders link to twitter if present', () => {
    const ninja = {
        twitter: '@someusername'
    }
    const {getByText} = render(<Ninja ninja={ninja} />);
    expect(getByText(ninja.twitter)).toBeInTheDocument();
});

it('renders link to stackOverflow if present', () => {
    const ninja = {
        stackOverflow: '12345'
    }
    const {getByText} = render(<Ninja ninja={ninja} />);
    expect(getByText(ninja.stackOverflow)).toBeInTheDocument();
});