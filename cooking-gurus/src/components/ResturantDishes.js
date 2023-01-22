import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import React, {useState} from "react";
import {Rating} from "primereact/rating";
import {Container, Modal} from "react-bootstrap";
import {Button} from "primereact/button";
import DishReview from "./DishReview";


export default function RestaurantDishes({specificResturantMenuType}) {


    const [showReviewModal, setShowReviewModal] = useState(false)
    const [dishToReview, setDishToReview] = useState(null)

    const handleShowDish = (rowData) => {
        return (
            <Button label="Show" onClick={() => {
                setDishToReview(rowData)
                setShowReviewModal(true)
            }
            }/>
        )

    }


    const ratingComponent = (dish) => {
        return (
            <Container>
                <p> TASTE: <Rating value={dish.rating.taste} readOnly cancel={false}/></p>
                <p> PRICE <Rating value={dish.rating.price_rating} readOnly cancel={false}/></p>
                <p> LOOK <Rating value={dish.rating.eyes_rating} readOnly cancel={false}/></p>
            </Container>

        )
    }

    return (
        <React.Fragment>
            <DataTable value={specificResturantMenuType} style={{maxWidth: "75vw"}}>
                <Column field="name" header="Name"></Column>
                <Column field="price" header="Price"></Column>
                <Column field="description" header="Description"></Column>
                <Column field="rating" header="Rating" body={ratingComponent}></Column>
                <Column header="Reviews" body={handleShowDish}></Column>
            </DataTable>


            <Modal size="xl" show={showReviewModal} onHide={() => setShowReviewModal(false)}>
                <DishReview dish={dishToReview} />
            </Modal>
        </React.Fragment>

    );
}