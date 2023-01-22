import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import React from "react";
import {Rating} from "primereact/rating";

export default function RestaurantDishes({specificResturantMenuType}) {

    const ratingComponent = (dish) => {

        return (
            <React.Fragment>
                <p> TASTE </p>
                <Rating value={dish.rating.taste} readOnly cancel={false}/>

                <p> PRICE </p>
                <Rating value={dish.rating.price_rating} readOnly cancel={false}/>

                <p> LOOK </p>
                <Rating value={dish.rating.eyes_rating} readOnly cancel={false}/>
            </React.Fragment>

        )
    }

    return (

        <DataTable value={specificResturantMenuType} style={{maxWidth: "75vw"}}>
            <Column field="name" header="Name"></Column>
            <Column field="price" header="Price"></Column>
            <Column field="description" header="Description"></Column>
            <Column field="rating" header="Rating" body={ratingComponent}></Column>
        </DataTable>


    );
}