import React from "react";
import {useParams} from "react-router-dom";
import {findRest} from "../utils";
import RestaurantDishes from "../components/ResturantDishes";
import {Container} from "react-bootstrap";
import {Card} from "primereact/card";


export default function SpecificResturantPage() {

    const restParam = useParams()
    const specificResturant = findRest(restParam.restaurant)

    return (
        <Container>
            <h1> Restaurant: {specificResturant.resturantname}</h1>


            <Card style={{marginTop:"5%"}} title="Starters">
                <RestaurantDishes specificResturantMenuType={specificResturant.menu.starters}/>
            </Card>

            <Card style={{marginTop:"5%"}} title="Main Dishes">
                <RestaurantDishes specificResturantMenuType={specificResturant.menu.main_dish}/>
            </Card>

            <Card style={{marginTop:"5%"}} title="Desserts">
                <RestaurantDishes specificResturantMenuType={specificResturant.menu.desserts}/>
            </Card>
        </Container>
    )
}