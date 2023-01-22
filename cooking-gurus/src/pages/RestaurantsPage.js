import React from 'react'
import {restaurantsdata} from '../data/data.js'
import ResturantCard from "../components/ResturantCard";
import {Container, Row, Col} from 'react-bootstrap'


export default function RestaurantsPage() {

    console.log(restaurantsdata)

    return (
        <Container>
            <Row>
                {restaurantsdata.map((restaurant, index) => {
                    return (
                        <Col xs={6} key={index} style={{padding: "1%"}}>
                            <ResturantCard restaurant={restaurant}/>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    )
}
