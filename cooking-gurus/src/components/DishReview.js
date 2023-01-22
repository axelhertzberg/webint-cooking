import React, {useState} from "react"
import {Container} from "react-bootstrap";
import {Card} from "primereact/card";
import {Rating} from "primereact/rating";
import {Divider} from "primereact/divider";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Dialog} from 'primereact/dialog';

export default function DishReview({dish}) {


    const [showReview, setShowReview] = useState(false)

    const [taste, setTaste] = useState(0)
    const [price, setPrice] = useState(0)
    const [look, setLook] = useState(0)
    const [comment, setComment] = useState("")


    return (
        <Container>
            <Card title={"Reviews of: " + dish.name} subTitle={dish.price + "$"}>

                <h4>{dish.description}</h4>


                <p> TASTE: <Rating value={dish.rating.taste} readOnly cancel={false}/></p>
                <p> PRICE <Rating value={dish.rating.price_rating} readOnly cancel={false}/></p>
                <p> LOOK <Rating value={dish.rating.eyes_rating} readOnly cancel={false}/></p>
                <p> Comment: {dish.rating.text_rating}</p>


                { showReview ? <React.Fragment>
                    <Divider/>
                    <h1> Your review: </h1>
                    <p> TASTE: <Rating value={taste} readOnly cancel={false}/></p>
                    <p> PRICE <Rating value={price} readOnly cancel={false}/></p>
                    <p> LOOK <Rating value={look} readOnly cancel={false}/></p>

                    <p> Comment: {comment}</p>
                </React.Fragment> : null }


                <Divider/>

                <h1> Add review</h1>
                <p> TASTE:<Rating value={taste} onChange={(e) => {
                    setTaste(e.target.value)
                }}/></p>
                <p> PRICE:<Rating value={price} onChange={(e) => {
                    setPrice(e.target.value)
                }}/></p>

                <p> LOOK:<Rating value={look} onChange={(e) => {
                    setLook(e.target.value)
                }}/></p>

                <Divider/>

                <p>COMMENT:</p>
                <InputText value={comment} onChange={(e) => setComment(e.target.value)}/>
                <Divider/>

                <Button label="Add Review" onClick={() => {
                   setShowReview(true)
                }}/>




                <Dialog visible={false} header="Your review is shown here" onHide={() => setShowReview(false)}>

                    <p> TASTE: <Rating value={taste} readOnly cancel={false}/></p>
                    <p> PRICE <Rating value={price} readOnly cancel={false}/></p>
                    <p> LOOK <Rating value={look} readOnly cancel={false}/></p>

                    <p> Comment: {comment}</p>
                </Dialog>

            </Card>
        </Container>
    )
}