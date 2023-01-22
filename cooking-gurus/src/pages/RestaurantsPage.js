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
                return index % 2 === 0 ? (
                    <Row key={index} style={{display: 'flex', justifyContent: 'center'}}>
                        <Col>
                            <ResturantCard restaurant={restaurant}/>
                        </Col>
                        {(index + 1 < restaurantsdata.length) &&
                            <Col>
                                <ResturantCard restaurant={restaurantsdata[index + 1]}/>
                            </Col>
                        }
                    </Row>
                ) : null;
            })}
    </Container>
  )
}
