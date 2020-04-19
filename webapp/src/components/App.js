import React, { Fragment } from 'react'
import NinjaSearch from './NinjaSearch'
import Ninjas from './Ninjas'

export default class App extends React.Component {

    constructor(props){
        super(props)
        this.getNinjas = this.getNinjas.bind(this)
        this.state = {
            ninjas: []
        }
    }

    async componentDidMount() {
        document.title = 'Tretton37 : Meet Our Developers'
        const ninjas = await this.getNinjas();
        this.setState( {ninjas: ninjas} );
    }

    async getNinjas() {
        let json = []
        // oh neat, we can wrap async await in try catch like regular js
        try{
            // Verify the response is ok (fetch doesn't error out on 404 or 5xx)
            const response = await fetch("https://api.tretton37.com/ninjas");
            if(!response.ok) {
                throw `Api error: ${response.statusText}`; // not sure what their errors look like...
            }
            json = await response.json();
        } catch(e) {
            // Rethrow if something goes wrong
            throw e;
        } 
        return json;
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
                        <Ninjas ninjas={this.state.ninjas}/>
                    </article>
                </main>
            </Fragment>
        )
    }
}