
/*

resturantname: string {
    location: string,
    type: string,
    meny: {
        starters: string[{
            name: string,
            price: double,
            description: string,
            rating: {
                taste: int,
                price_rating: int,
                eyes_rating: int,
                text_rating: string
            }
        }],
        main_dish: string[
            {
            name: string,
            price: double,
            description: string,
            rating: {
                taste: int,
                price_rating: int,
                eyes_rating: int,
                text_rating: string
            }
        }
        ],
        desserts: string[
            {
            name: string,
            price: double,
            description: string,
            rating: {
                taste: int,
                price_rating: int,
                eyes_rating: int,
                text_rating: string
            }
        }
        ]
    }
}


*/

export const restaurants = [
    {
        resturantname: "The Green Room",
        location: "New York",
        type: "Italian",
        menu: {
            starters: [
                {
                    name: "Bruschetta",
                    price: 12.99,
                    description: "Tomato, basil, and balsamic glaze on toasted bread",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "Nice"
                    }
                },
                {
                    name: "Caprese Salad",
                    price: 14.99,
                    description: "Mozzarella, tomatoes, basil, and balsamic glaze",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "Good"
                    }
                }
            ],
            main_dish: [
                {
                    name: "Spaghetti Bolognese",
                    price: 19.99,
                    description: "Spaghetti with classic meat sauce",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "Nice"
                    }
                },
                {
                    name: "Parmigiana di Melanzane",
                    price: 21.99,
                    description: "Eggplant parmesan",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "Good"
                    }
                }
            ],
            desserts: [
                {
                    name: "Tiramisu",
                    price: 7.99,
                    description: "Classic Italian dessert",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "Nice"
                    }
                },
                {
                    name: "Cannoli",
                    price: 6.99,
                    description: "Filled with sweet ricotta cheese",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "Good"
                    }
                }
            ]
        }
    },
    {
        resturantname: "The Red Room",
        location: "Los Angeles",
        type: "Mexican",
        menu: {
            starters: [
                {
                    name: "Guacamole",
                    price: 8.99,
                    description: "Made fresh with avocados, tomatoes, and cilantro",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "Nice"
                    }
                },
                {
                    name: "Queso Fundido",
                    price: 10.99,
                    description: "Melted cheese with chorizo",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "Good"
                    }
                }
            ],
            main: [{
                name: "Shrimp tacos",
                price: 10.99,
                description: "Melted cheese with chorizo",
                rating: {
                    taste: 4,
                    price_rating: 3,
                    eyes_rating: 2,
                    text_rating: "Good"
                }
        }],
            desserts: [
                {
                    name: "Tiramisu",
                    price: 7.99,
                    description: "Classic Italian dessert",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "Nice"
                    }
                },
                {
                    name: "Cannoli",
                    price: 6.99,
                    description: "Filled with sweet ricotta cheese",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "Good"
                    }
                }
            ]
            
        }
    
    },

    
]


