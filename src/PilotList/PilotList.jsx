import React, { Component } from 'react'
import { getPilots } from '../services/api-calls'

class PilotList extends Component {
    state = { 
        pilots: this.props.location.state.starshipDetails.pilots
     }

    async componentDidMount() {
        const pilotList = await getPilots()
        this.setState({ pilotList })
    } 

    render() { 
        return ( 
            <>
            <h1>Pilots here</h1>
            </>
         );
    }
}
 
export default PilotList;