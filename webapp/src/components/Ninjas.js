import React from 'react'

export default class Ninjas extends React.Component {

    constructor(props){
        super(props)
    }
    
    render() {
        console.log(this.props.ninjas)
        return (
            <ul>
                {
                    this.props.ninjas.map(function(ninja) {
                        return <li>{ninja.name}</li>
                    })
                }
            </ul>
        )
    }
}