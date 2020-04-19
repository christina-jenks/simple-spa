import React from 'react'

export default class Ninjas extends React.Component {

    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <ul>
                <li>ninja1</li>
                <li>ninja2</li>
                <li>ninja3</li>
            </ul>
        )
    }
}