import React from 'react'

export default class NinjaSearchSocials extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <fieldset id="searchByContact">
                <legend>Search by Social Media:</legend>
                <label htmlFor="gitHub">GitHub</label>
                <input type="checkbox" id="gitHub" name="gitHub" />

                <label htmlFor="linkedIn">LinkedIn</label>
                <input type="checkbox" id="linkedIn" name="linkedIn" />

                <label htmlFor="twitter">Twitter</label>
                <input type="checkbox" id="twitter" name="twitter" />

                <label htmlFor="stackOverflow">Stack Overflow</label>
                <input type="checkbox" id="stackOverflow" name="stackOverflow" />
            </fieldset>
        )
    }
}