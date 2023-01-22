import React from 'react'
import {Container} from 'react-bootstrap'
import {restaurantsdata} from '../data/data.js'
import ResturantCard from "../components/ResturantCard";
import {Row, Col} from 'react-bootstrap'


export default function RestaurantsPage() {

    console.log(restaurantsdata)

    return (
        <Container>
            {restaurantsdata.map((restaurant, index) => {
                if (index % 2 === 0) {
                    return (
                        <Row key={index} style={{ display: 'flex', justifyContent: 'center'}}>
                            <Col style={{ padding: '1%' }}>
                                <ResturantCard restaurant={restaurant}/>
                            </Col>
                        {(index + 1 < restaurantsdata.length) &&
                            <Col style={{ padding: '1%' }}>
                                <ResturantCard restaurant={restaurantsdata[index + 1]}/>
                            </Col>
                        }
                        </Row>
                    )
                }
            })}
    </Container>
  )
}
