import React from 'react'
import {Card} from "primereact/card"
import {Button} from "primereact/button";
import {useNavigate} from "react-router-dom";

export default function ResturantCard({restaurant}) {

    const navigate = useNavigate()

    const footer = (rest) => {
        return (<Button label="Visit" onClick={(restaurant) => {
            navigate(rest)
        }
        }/>)
    }

    return (
        <Card title={restaurant.resturantname}
              subTitle={restaurant.location}
              footer={footer(restaurant.resturantname)}>
            {restaurant.resturantname}
        </Card>
    )
}
