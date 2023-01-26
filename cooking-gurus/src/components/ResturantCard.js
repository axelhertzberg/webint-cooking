import React, {useState} from 'react'
import {Card} from "primereact/card"
import {Button} from "primereact/button";
import {useNavigate} from "react-router-dom";
import {Stack} from "react-bootstrap";
import { ProgressSpinner } from 'primereact/progressspinner';

export default function ResturantCard({restaurant, ableToAddFavorite}) {

    const navigate = useNavigate()

    let restaurantFromLocalStorage = window.localStorage.getItem(restaurant.restaurantid)

    const [isLiked, setIsLiked] = useState(false)
    const [spinner, setSpinner] = useState(true)

    const footer = (rest) => {
        return (
            <div style={{display: "flex", padding: 10, justifyContent: "space-between"}}>
                <Button label="Visit" onClick={() => {
                    navigate(rest)
                }}/>
                {ableToAddFavorite ?
                    restaurantFromLocalStorage ?
                        (< i className="pi pi-heart-fill" style={{'fontSize': '1.5em'}}
                             onClick={() => {
                                 window.localStorage.removeItem(restaurant.restaurantid)
                                 setIsLiked(!isLiked)
                             }
                             }/>)
                        : (< i className="pi pi-heart" style={{'fontSize': '1.5em'}} onClick={() => {
                                window.localStorage.setItem(restaurant.restaurantid, JSON.stringify(restaurant))
                                setIsLiked(!isLiked)
                            }}/>
                        )
                    : null}
            </div>

        )
    }

    return (
        <Card title={restaurant.resturantname}
              subTitle={restaurant.location}
              footer={footer(restaurant.restaurantid)}
              style={{minWidth: "25vw"}}>
            <Stack gap={3}>

                {spinner ? <ProgressSpinner />  : null}
                <img src={restaurant.image} alt="Resturant or dish" width={300}
                     onLoad={() => setSpinner(false)}></img>

                {restaurant.type}
            </Stack>
        </Card>
    )
}
