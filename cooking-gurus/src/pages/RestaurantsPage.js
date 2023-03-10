import React, {useEffect, useRef, useState} from 'react'
import {restaurantsdata} from '../data/data.js'
import ResturantCard from "../components/ResturantCard";
import {Row, Col} from 'react-bootstrap';
import HomeButton from "../components/HomeButton";
import {InputText} from 'primereact/inputtext';
import FavoritesList from "../components/FavoritesList";
import {ProgressSpinner} from 'primereact/progressspinner';

export default function RestaurantsPage() {
    const [searchValue, setSearchValue] = useState('')
    const [loggedIn, setLoggedIn] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [expanded, setExpanded] = useState(false)
    const [height, setHeight] = useState("7%")

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
            setHeight("7%")
        } else {
            setHeight("100vh")
        }
    }

    const filteredData = restaurantsdata.filter((restaurant) =>
        restaurant.resturantname.toLowerCase().includes(searchValue.toLowerCase()));

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setExpanded(false);
                setHeight("7%")
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
                        bottom:0,
                        right: 0,
                        height: height ? height : "7%",
                        width: "20%",
                        backgroundColor: `rgb(99, 102, 241)`,
                        borderRadius: 5
                    }} onClick={handleExpanded}
                >
                    <h4> Favorites </h4>
                    {expanded ? (
                        <React.Fragment>
                            <i className="pi pi-heart"
                               style={{'fontSize': '2em', display: "flex", justifyContent: "center"}}
                               aria-label="Favorites"></i>
                            <FavoritesList/>
                        </React.Fragment>
                    ) : <React.Fragment/>}

                </aside>
                : null}

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
        </React.Fragment>
    )
}