import React from "react"
import {allStorage} from "../utils";
import {useNavigate} from "react-router-dom";
import {Button} from "primereact/button";


export default function FavoritesList() {

    const favorites = allStorage()

    const navigate = useNavigate()

    return (
        <React.Fragment>
            <Button label="Close" style={{ position:"absolute", top: 5, right:1}}/>
            <ul>
                {favorites.map((rest) => {
                    if (rest.restaurantid) {
                        return (
                            <li key={rest.restaurantid} onClick={() => navigate(rest.restaurantid)}>
                                <h6> {rest.type}</h6>
                                <h5> {rest.resturantname}</h5>
                                <p> {rest.location}</p>
                            </li>
                        )
                    } else return null

                })}
            </ul>
        </React.Fragment>
    )
}