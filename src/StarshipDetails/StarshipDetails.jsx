import React, { Component } from 'react'
import { getStarshipDetails } from '../services/api-calls'
import PilotList from '../PilotList/PilotList'

class StarshipDetails extends Component {
    state = { 
        url: this.props.location.state.starship.url,
        starshipDetails: {}
     }

    async componentDidMount() {
        const starshipDetails = await getStarshipDetails(this.state.url)
        console.log(starshipDetails)
        this.setState({ starshipDetails })
    }

    render() { 
        const {starshipDetails} = this.state
        return ( 
            <>
            <h1>Here are some ship details</h1>
            <h2>{starshipDetails.name}</h2>
            <h3>{starshipDetails.model}</h3>
            <a href="/">RETURN</a>
            <PilotList 
                state={starshipDetails}/>
            </>
         );
    }
}
 
export default StarshipDetails;