import React, { useState } from 'react'
import {restaurantsdata} from '../data/data.js'
import ResturantCard from "../components/ResturantCard";
import {Container, Row, Col} from 'react-bootstrap';
import HomeButton from "../components/HomeButton";
import {InputText} from 'primereact/inputtext';

export default function RestaurantsPage() {
    const [searchValue, setSearchValue] = useState('')

    const handleSearch = (event) => {
        setSearchValue(event.target.value)
    }

    const filteredData = restaurantsdata.filter((restaurant) => 
        restaurant.resturantname.toLowerCase().includes(searchValue.toLowerCase()));

    return (
        <Container>
            <HomeButton />
            <Row>
            <InputText 
                type="text" 
                placeholder="Search..." 
                value={searchValue} 
                onChange={handleSearch}
            />
            </Row>
            <Row>
                {filteredData.map((restaurant, index) => {
                    return (
                        <Col xs={6} key={index} style={{padding: "1%"}}>
                            <ResturantCard restaurant={restaurant}/>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    )
}