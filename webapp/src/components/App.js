import React, { Fragment } from 'react'
import NinjaSearch from './NinjaSearch'
import Ninjas from './Ninjas'

export default class App extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {
            ninjas: []
        }

        this.getNinjas = this.getNinjas.bind(this)
    }

    async getNinjas() {
        return this.props.getNinjas();
    }

    async componentDidMount() {
        document.title = 'Tretton37 : Meet Our Developers'
        try{
            const ninjas = await this.getNinjas();
            this.setState( {ninjas: ninjas} );
        } catch(e) {
            console.log(e);
        }
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