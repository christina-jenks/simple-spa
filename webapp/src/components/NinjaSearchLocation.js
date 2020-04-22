import React from 'react'

export default class NinjaSearchLocation extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <label htmlFor="searchByOffice">Search by Office Location</label>
                <input type="text" id="searchByOffice" name="searchByOffice" placeholder="Office Location" />
            </>
        )
    }
}