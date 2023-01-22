import React from 'react'
import {Container} from 'react-bootstrap'
import {restaurantsdata} from '../data/data.js'
import ResturantCard from "../components/ResturantCard";


export default function RestaurantsPage() {

    console.log(restaurantsdata)

    return (
        <Container>

            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:"center"}}>
                {restaurantsdata.map(restaurant => {
                    return <ResturantCard restaurant={restaurant}/>
                })}
            </div>

        </Container>
    )
}
