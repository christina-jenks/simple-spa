import React, { Fragment } from 'react'
import NinjaSearch from './NinjaSearch'
import Ninjas from './Ninjas'

export default class App extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {
        document.title = 'Tretton37 : Meet Our Developers'
    }

    render() {
        return (
            <Fragment>
                
                <header>
                    <h1>Tretton 37's Ninjas</h1>
                </header>
                <NinjaSearch />
                <main>
                    <article id='ninjas'>
                        <Ninjas />
                    </article>
                </main>
            </Fragment>
        )
    }
}