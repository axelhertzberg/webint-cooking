import React, {useEffect, useRef, useState} from 'react'
import {restaurantsdata} from '../data/data.js'
import ResturantCard from "../components/ResturantCard";
import {Container, Row, Col} from 'react-bootstrap';
import HomeButton from "../components/HomeButton";
import {InputText} from 'primereact/inputtext';
import FavoritesList from "../components/FavoritesList";
import {ProgressSpinner} from 'primereact/progressspinner';

export default function RestaurantsPage() {
    const [searchValue, setSearchValue] = useState('')
    const [loggedIn, setLoggedIn] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [expanded, setExpanded] = useState(false)
    const [width, setWidth] = useState("10%")
    const [height, setHeight] = useState("2%")

    const handleSearch = (event) => {
        setSearchValue(event.target.value)
    }

    const ref = useRef(null);

    const handleLogin = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            loggedIn.length > 0 ? setLoggedIn("") : setLoggedIn("Cooking Guru logged in")
        }, 2000)
    }

    const handleExpanded = () => {
        setExpanded(!expanded)
        if (expanded) {
            setWidth("10%")
            setHeight("5%")
        } else {
            setWidth("40%")
            setHeight("100%")
        }
    }

    const filteredData = restaurantsdata.filter((restaurant) =>
        restaurant.resturantname.toLowerCase().includes(searchValue.toLowerCase()));

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setExpanded(false);
                setWidth("10%");
                setHeight("5%")
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);


    return (
        <React.Fragment>
            {loggedIn ?
                <aside
                    ref={ref}
                    style={{
                        zIndex: 10,
                        cursor: "pointer",
                        position: "fixed",
                        right: 0,
                        top: 0,
                        height: height ? height : "5%",
                        width: "25%",
                        backgroundColor: `rgb(99, 102, 241)`,
                        borderBottomRightRadius: "20%",
                        borderBottomLeftRadius: "20%"
                    }} onClick={handleExpanded}
                >
                    <Container class="overflow-auto">
                        <i className="pi pi-heart"
                           style={{'fontSize': '2em', display: "flex", justifyContent: "center"}}
                           aria-label="Favorites"></i>
                        {expanded ? (
                            <React.Fragment>
                                <h4> Favorites </h4>
                                <FavoritesList/>
                            </React.Fragment>
                        ) : <React.Fragment/>}
                    </Container>
                </aside>
                : null}
            <Container fluid>
                <header style={{width: "60vw", display: "flex", flexWrap: "nowrap", justifyContent: "space-between"}}>
                    <HomeButton/>
                    {isLoading ?
                        <ProgressSpinner/> :
                        (
                            <div>
                                <i className="pi pi-user"
                                   style={{
                                       fontSize: '2em',
                                       display: "flex",
                                       justifyContent: "center",
                                       cursor: "pointer"
                                   }}
                                   onClick={handleLogin}
                                   placeholder="Login"
                                ></i>
                                <h5 style={{fontSize: "1em"}}> {loggedIn} </h5>
                            </div>

                        )
                    }
                </header>


                <Row>
                    <Col>
                        <InputText
                            type="text"
                            placeholder="Search for a restaurant name..."
                            value={searchValue}
                            onChange={handleSearch}
                            style={{width: "100%"}}
                        />
                    </Col>
                </Row>
                <Row>
                    {filteredData.map((restaurant, index) => {
                        return (
                            <Col xs={6} key={index} style={{padding: "1%"}}>
                                <ResturantCard restaurant={restaurant} ableToAddFavorite={loggedIn}/>
                            </Col>
                        );
                    })}
                </Row>

                <footer style={{
                    height: "7em",
                    width: "100%",
                    padding: 10,
                    backgroundColor: "lightgray",
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <address> 26 Rue de Restorante, Antibes 66000</address>
                </footer>
            </Container>
        </React.Fragment>
    )
}