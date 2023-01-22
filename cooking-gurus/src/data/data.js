
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

export const restaurantsdata = [
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

    {
        resturantname: "Pho King",
        location: "Houston, TX",
        type: "Vietnamese",
        menu: {
            starters: [
                {
                    name: "Summer Rolls",
                    price: 6.99,
                    description: "Rice paper rolls filled with shrimp, lettuce, and herbs",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "delicious"
                    }
                },
                {
                    name: "Crab Rangoon",
                    price: 7.99,
                    description: "Deep-fried wontons filled with cream cheese and crab meat",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "delicious"
                    }
                }
            ],
            main_dish: [
                {
                    name: "Pho Noodle Soup",
                    price: 9.99,
                    description: "Rice noodles in a beef broth with various meats",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "delicious"
                    }
                },
                {
                    name: "Bun Cha",
                    price: 10.99,
                    description: "Grilled pork with vermicelli noodles and herbs",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "delicious"
                    }
                }
            ],
            desserts: [
                {
                    name: "Che Bap",
                    price: 6.99,
                    description: "Sweet sticky rice with various toppings",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "delicious"
                    }
                },
                {
                    name: "Banh Flan",
                    price: 5.99,
                    description: "Vietnamese style caramel custard",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "delicious"
                    }
                }
            ]
        }
    },

    {
        resturantname: "The Curry House",
        location: "Chicago, IL",
        type: "Indian",
        menu: {
            starters: [
                {
                    name: "Samosas",
                    price: 5.99,
                    description: "Fried or baked pastry with savory filling",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "delicious"
                    }
                },
                {
                    name: "Aloo Tikki",
                    price: 6.99,
                    description: "Potato patties with spices and herbs",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "delicious"
                    }
                }
            ],
            main_dish: [
                {
                    name: "Butter Chicken",
                    price: 11.99,
                    description: "Boneless chicken cooked in tomato-based sauce",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "delicious"
                    }
                },
                {
                    name: "Palak Paneer",
                    price: 12.99,
                    description: "Spinach and cottage cheese curry",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "delicious"
                    }
                }
            ],
            desserts: [
                {
                    name: "Gulab Jamun",
                    price: 5.99,
                    description: "Deep-fried dough balls in sweet syrup",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "delicious"
                    }
                },
                {
                    name: "Ras Malai",
                    price: 4.99,
                    description: "Soft cheese dumplings in sweet cream sauce",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "delicious"
                    }
                }
            ]
        }
    }

]


