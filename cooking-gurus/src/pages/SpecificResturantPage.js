import React from "react";
import {useParams} from "react-router-dom";
import {findRest} from "../utils";
import {Row} from "react-bootstrap";
import RestaurantDishes from "../components/ResturantDishes";
import {Container} from "react-bootstrap";


export default function SpecificResturantPage() {

    const restParam = useParams()
    const specificResturant = findRest(restParam.restaurant)

    console.log(specificResturant)

    return (
        <Container>
            {specificResturant.resturantname}

            <Row>
                <h1>Starters</h1>
                <RestaurantDishes specificResturantMenuType={specificResturant.menu.starters}/>
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