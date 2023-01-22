import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import React from "react";
import {Rating} from "primereact/rating";
import {Container} from "react-bootstrap";

export default function RestaurantDishes({specificResturantMenuType}) {

    const ratingComponent = (dish) => {

        return (
            <Container>
                <p> TASTE </p>
                <Rating value={dish.rating.taste} readOnly cancel={false}/>

                <p> PRICE </p>
                <Rating value={dish.rating.price_rating} readOnly cancel={false}/>

                <p> LOOK </p>
                <Rating value={dish.rating.eyes_rating} readOnly cancel={false}/>

            </Container>
        )
    }

    return (

        <DataTable value={specificResturantMenuType}>
            <Column field="name" header="Name"></Column>
            <Column field="price" header="Price"></Column>
            <Column field="description" header="Description"></Column>
            <Column field="rating" header="Rating" body={ratingComponent}></Column>
        </DataTable>


    );
}