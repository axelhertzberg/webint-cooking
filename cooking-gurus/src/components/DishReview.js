import React from "react"
import {Container} from "react-bootstrap";
import {Card} from "primereact/card";
import {Rating} from "primereact/rating";

export default function DishReview({dish}) {

    return (
        <Container>
            <Card title={dish.name} subTitle={dish.price + "$"}>

                <h4>{dish.description}</h4>


                <p> TASTE: <Rating value={dish.rating.taste} readOnly cancel={false}/></p>
                <p> PRICE <Rating value={dish.rating.price_rating} readOnly cancel={false}/></p>
                <p> LOOK <Rating value={dish.rating.eyes_rating} readOnly cancel={false}/></p>

                <p> Comment: {dish.rating.text_rating}</p>

            </Card>
        </Container>
    )
}