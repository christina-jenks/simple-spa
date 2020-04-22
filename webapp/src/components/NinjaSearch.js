import React from 'react'
import NinjaSearchName from './NinjaSearchName'
import NinjaSearchLocation from './NinjaSearchLocation'
import NinjaSearchSocials from './NinjaSearchSocials'

export default class NinjaSearch extends React.Component {

    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <form id="searchForm" >
                <NinjaSearchName />
                <NinjaSearchLocation />
                <NinjaSearchSocials />
            </form>
            // The original form
            // <form id="searchForm"> 
            //     <label for="searchByName">Search by Name:</label>
            //     <input type="text" id="searchByName" name="searchByName" placeholder="Name" />

            //     <label for="searchByOffice">Search by Office Location</label>
            //     <input type="text" id="searchByOffice" name="searchByOffice" placeholder="Office Location" />

            //     <fieldset id="searchByContact">
            //         <legend>Search by Social Media:</legend>
            //         <label for="gitHub">GitHub</label>
            //         <input type="checkbox" id="gitHub" name="gitHub" />

            //         <label for="linkedIn">LinkedIn</label>
            //         <input type="checkbox" id="linkedIn" name="linkedIn" />

            //         <label for="twitter">Twitter</label>
            //         <input type="checkbox" id="twitter" name="twitter" />

            //         <label for="stackOverflow">Stack Overflow</label>
            //         <input type="checkbox" id="stackOverflow" name="stackOverflow" />
            //     </fieldset>

            //     <input type="submit" name="submit" value="Search" />
            // </form>
        
        )
    }
}