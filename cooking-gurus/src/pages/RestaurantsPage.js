import React from 'react'
import {Container} from 'react-bootstrap'
import {restaurantsdata} from '../data/data.js'
import ResturantCard from "../components/ResturantCard";


export default function RestaurantsPage() {

    console.log(restaurantsdata)

    return (
        <Container fluid style={{height: "85vh", width: "80vw"}}>
            {restaurantsdata.map(restaurant => {
                return <ResturantCard restaurant={restaurant} key={restaurant.resturantname}/>
            })}
        </Container>
    )
}
