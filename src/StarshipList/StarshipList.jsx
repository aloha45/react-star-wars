import React, { Component } from 'react'
import { getStarshipList } from '../services/api-calls'
import { Link } from 'react-router-dom'

class StarshipList extends Component {
    state = { 
        starshipList: []
     }

    async componentDidMount() {
        const starshipList = await getStarshipList()
        this.setState( {starshipList: starshipList.results })
    }

    render() { 
        return ( 
            <>
                {this.state.starshipList.map((starship) => 
                    <div key={starship.url}>
                        <Link
                            to={{
                                pathname: `/starship`,
                                state: {starship}
                            }}
                        >
                            {starship.name}
                        </Link>
                    </div>
                )}
            </>
         );
    }
}
 
export default StarshipList;