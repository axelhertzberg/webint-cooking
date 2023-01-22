import React from "react";
import {useParams} from "react-router-dom";
import {findRest} from "../utils";
import {Row, Col} from "react-bootstrap";
import RestaurantDishes from "../components/ResturantDishes";
import {Container} from "react-bootstrap";


export default function SpecificResturantPage() {

    const restParam = useParams()
    const specificResturant = findRest(restParam.restaurant)

    console.log(specificResturant)

    return (
        <Container style={{maxWidth: "80vw"}}>
            {specificResturant.resturantname}

            <Row md={2} style={{"justify-content":"center"}}>
                <Col xs sm={2}>
                    <h1>Starters</h1>
                    <RestaurantDishes specificResturantMenuType={specificResturant.menu.starters}/>
                </Col>
            </Row>

            <Row>
                <h1> Main Dishes</h1>
                <RestaurantDishes specificResturantMenuType={specificResturant.menu.main_dish}/>
            </Row>

            <Row>
                <h1> Desserts </h1>
                <RestaurantDishes specificResturantMenuType={specificResturant.menu.desserts}/>
            </Row>
        </Container>
    )
}