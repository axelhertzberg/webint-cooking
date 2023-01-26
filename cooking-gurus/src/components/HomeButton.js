import React from 'react'
import {Button} from "primereact/button"
import {useNavigate} from "react-router-dom";

export default function HomeButton() {

    const navigate = useNavigate()

    return (
        <div style={{marginBottom: "20px"}}>
            <Button 
                className='home-button' 
                label="Home" icon="pi pi-home" 
                onClick={() => navigate("/")}/>
        </div>
    )
}