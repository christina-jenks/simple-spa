import React from 'react'

export default class NinjaSearchName extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <label htmlFor="searchByName">Search by Name:</label>
                <input type="text" id="searchByName" name="searchByName" placeholder="Name" />
            </>
        )
    }
}