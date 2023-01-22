import React from 'react'
import {Button} from "primereact/button"

export default function HomeButton() {
    return (
        <div style={{marginBottom: "20px"}}>
            <Button 
                className='home-button' 
                label="Home" icon="pi pi-home" 
                onClick={() => window.location.href = '/'}/>
        </div>
    )
}