import React from 'react'
import {Card} from "primereact/card"
import {Button} from "primereact/button";

export default function ResturantCard({restaurant}) {

    const footer = () => {
        return(<Button label="Visit" onClick={(restaurant) => console.log(restaurant.id)}/>)
    }

    return (
        <Card title={restaurant.resturantname}
              subTitle={restaurant.location}
              footer={footer}
              style={{width: '500px'}}
              >
            {restaurant.resturantname}
        </Card>
    )
}
