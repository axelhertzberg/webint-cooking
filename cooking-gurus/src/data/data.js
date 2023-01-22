
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
        restaurantid: "the_green_room",
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
                        price_rating: 3.5,
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
        restaurantid: "the_red_room",
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
        restaurantid: "pho_king",
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
        restaurantid: "the_curry_house",
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
    },
    {
        restaurantid: "the_golden_wok",
        resturantname: "The Golden Wok",
        location: "San Francisco",
        type: "Chinese",
        menu: {
            starters: [
                {
                    name: "Egg Rolls",
                    price: 6.99,
                    description: "Crispy fried rolls filled with pork and vegetables",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "Nice"
                    }
                },
                {
                    name: "Crab Rangoon",
                    price: 8.99,
                    description: "Wonton wrappers filled with cream cheese and crab meat",
                    rating: {
                        taste: 4,
                        price_rating: 4,
                        eyes_rating: 3,
                        text_rating: "Good"
                    }
                }
            ],
            main_dish: [
                {
                    name: "Kung Pao Chicken",
                    price: 13.99,
                    description: "Stir-fry dish with chicken, peanuts, and vegetables in spicy Kung Pao sauce",
                    rating: {
                        taste: 5,
                        price_rating: 4,
                        eyes_rating: 3,
                        text_rating: "Delicious"
                    }
                },
                {
                    name: "Moo Shu Pork",
                    price: 15.99,
                    description: "Shredded pork stir-fry with vegetables and hoisin sauce, served with thin pancakes",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "Nice"
                    }
                }
            ],
            desserts: [
                {
                    name: "Fried Banana",
                    price: 5.99,
                    description: "Sliced bananas coated in a sweet batter and fried until golden",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "Nice"
                    }
                },
                {
                    name: "Mango Pudding",
                    price: 4.99,
                    description: "Silky smooth pudding made with fresh mango",
                    rating: {
                        taste: 5,
                        price_rating: 4,
                        eyes_rating: 3,
                        text_rating: "Delicious"
                    }
                }
            ]
        }
    },

    {
        restaurantid: "the_jade_palace",
        resturantname: "The Jade Palace",
        location: "Los Angeles",
        type: "Chinese",
        menu: {
            starters: [
                {
                    name: "Spring Rolls",
                    price: 5.99,
                    description: "Crispy fried rolls filled with vegetables and shrimp",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "Nice"
                    }
                },
                {
                    name: "Potstickers",
                    price: 7.99,
                    description: "Fried dumplings filled with pork and vegetables",
                    rating: {
                        taste: 4,
                        price_rating: 4,
                        eyes_rating: 3,
                        text_rating: "Good"
                    }
                }
            ],
            main_dish: [
                {
                    name: "Sesame Tofu",
                    price: 14.99,
                    description: "Fried tofu in a sweet and savory sesame sauce",
                    rating: {
                        taste: 5,
                        price_rating: 4,
                        eyes_rating: 3,
                        text_rating: "Delicious"
                    }
                },
                {
                    name: "Beef and Broccoli",
                    price: 16.99,
                    description: "Stir-fry dish with beef and broccoli in oyster sauce",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "Nice"
                    }
                }
            ],
            desserts: [
                {
                    name: "Almond Cookies",
                    price: 6.99,
                    description: "Crispy and buttery cookies made with ground almonds",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "Nice"
                    }
                },
                {
                    name: "Lychee Sorbet",
                    price: 5.99,
                    description: "Refreshing sorbet made with lychee fruit",
                    rating: {
                        taste: 5,
                        price_rating: 4,
                        eyes_rating: 3,
                        text_rating: "Delicious"
                    }
                }
            ]
        }
    },

    {
        restaurantid: "the_sizzling_wok",
        resturantname: "The Sizzling Wok",
        location: "Chicago",
        type: "Chinese",
        menu: {
            starters: [
                {
                    name: "Vegetable Egg Rolls",
                    price: 5.99,
                    description: "Crispy fried rolls filled with mixed vegetables",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "Nice"
                    }
                },
                {
                    name: "Pork and Chive Dumplings",
                    price: 7.99,
                    description: "Steamed dumplings filled with pork and chives",
                    rating: {
                        taste: 4,
                        price_rating: 4,
                        eyes_rating: 3,
                        text_rating: "Good"
                    }
                }
            ],
            main_dish: [
                {
                    name: "Szechuan Tofu",
                    price: 12.99,
                    description: "Stir-fry dish with tofu, vegetables, and peanuts in spicy Szechuan sauce",
                    rating: {
                        taste: 5,
                        price_rating: 4,
                        eyes_rating: 3,
                        text_rating: "Delicious"
                    }
                },
                {
                    name: "Cantonese Chow Mein",
                    price: 14.99,
                    description: "Stir-fry dish with noodles, vegetables, and a savory sauce",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "Nice"
                    }
                }
            ],
            desserts: [
                {
                    name: "Deep Fried Oreos",
                    price: 5.99,
                    description: "Oreo cookies coated in a sweet batter and fried until golden",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "Nice"
                    }
                },
                {
                    name: "Lychee Cheesecake",
                    price: 6.99,
                    description: "A creamy cheesecake infused with lychee fruit",
                    rating: {
                        taste: 5,
                        price_rating: 4,
                        eyes_rating: 3,
                        text_rating: "Delicious"
                    }
                }
            ]
        }
    },
    {
        restaurantid: "the_pizza_palace",
        resturantname: "The Pizza Palace",
        location: "New York",
        type: "Italian",
        menu: {
            starters: [
                {
                    name: "Bruschetta",
                    price: 6.99,
                    description: "Toasted bread with diced tomatoes, garlic, basil, and olive oil",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "Nice"
                    }
                },
                {
                    name: "Garlic Knots",
                    price: 4.99,
                    description: "Soft and chewy knots of dough coated in garlic butter",
                    rating: {
                        taste: 4,
                        price_rating: 4,
                        eyes_rating: 3,
                        text_rating: "Good"
                    }
                }
            ],
            main_dish: [
                {
                    name: "Margherita Pizza",
                    price: 12.99,
                    description: "A classic pizza with tomato sauce, mozzarella, basil, and olive oil",
                    rating: {
                        taste: 5,
                        price_rating: 4,
                        eyes_rating: 3,
                        text_rating: "Delicious"
                    }
                },
                {
                    name: "Pepperoni Pizza",
                    price: 14.99,
                    description: "A pizza with tomato sauce, mozzarella, pepperoni, and spices",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "Nice"
                    }
                }
            ],
            desserts: [
                {
                    name: "Tiramisu",
                    price: 5.99,
                    description: "A classic Italian dessert made with mascarpone, espresso, and ladyfingers",
                    rating: {
                        taste: 4,
                        price_rating: 3,
                        eyes_rating: 2,
                        text_rating: "Nice"
                    }
                },
                {
                    name: "Cannoli",
                    price: 4.99,
                    description: "Fried pastry shells filled with sweet ricotta cheese and chocolate chips",
                    rating: {
                        taste: 5,
                        price_rating: 4,
                        eyes_rating: 3,
                        text_rating: "Delicious"
                    }
                }
            ]
        }
    },
    {
        restaurantid: "sushi_paradise",
        "resturantname": "Sushi Paradise",
        "location": "Los Angeles",
        "type": "Japanese",
        "menu": {
            "starters": [
                {
                    "name": "Edamame",
                    "price": 4.99,
                    "description": "Boiled soybeans in the pod, lightly salted",
                    "rating": {
                        "taste": 4,
                        "price_rating": 3,
                        "eyes_rating": 2,
                        "text_rating": "Nice"
                    }
                },
                {
                    "name": "Gyoza",
                    "price": 6.99,
                    "description": "Pan-fried dumplings filled with meat or vegetables",
                    "rating": {
                        "taste": 5,
                        "price_rating": 4,
                        "eyes_rating": 3,
                        "text_rating": "Delicious"
                    }
                }
            ],
            "main_dish": [
                {
                    "name": "California Roll",
                    "price": 8.99,
                    "description": "A sushi roll with crab meat, avocado, and cucumber",
                    "rating": {
                        "taste": 4,
                        "price_rating": 3,
                        "eyes_rating": 2,
                        "text_rating": "Nice"
                    }
                },
                {
                    "name": "Tuna Sashimi",
                    "price": 12.99,
                    "description": "Thinly sliced raw tuna served with soy sauce and wasabi",
                    "rating": {
                        "taste": 5,
                        "price_rating": 4,
                        "eyes_rating": 3,
                        "text_rating": "Delicious"
                    }
                }
            ],
            "desserts": [
                {
                    "name": "Mochi Ice Cream",
                    "price": 4.99,
                    "description": "Soft and chewy mochi filled with ice cream",
                    "rating": {
                        "taste": 5,
                        "price_rating": 4,
                        "eyes_rating": 3,
                        "text_rating": "Delicious"
                    }
                },
                {
                    "name": "Green Tea Ice Cream",
                    "price": 3.99,
                    "description": "Traditional Japanese green tea flavored ice cream",
                    "rating": {
                        "taste": 4,
                        "price_rating": 3,
                        "eyes_rating": 2,
                        "text_rating": "Nice"
                    }
                }
            ]
        }
    },
    {
        restaurantid: "the_curry_house2",
        "resturantname": "The Curry House",
        "location": "London",
        "type": "Indian",
        "menu": {
            "starters": [
                {
                    "name": "Samosa",
                    "price": 3.99,
                    "description": "Deep-fried pastries filled with spiced potatoes and peas",
                    "rating": {
                        "taste": 5,
                        "price_rating": 4,
                        "eyes_rating": 3,
                        "text_rating": "Delicious"
                    }
                },
                {
                    "name": "Onion Bhaji",
                    "price": 4.99,
                    "description": "Deep-fried onion fritters in a gram flour batter",
                    "rating": {
                        "taste": 4,
                        "price_rating": 3,
                        "eyes_rating": 2,
                        "text_rating": "Nice"
                    }
                }
            ],
            "main_dish": [
                {
                    "name": "Butter Chicken",
                    "price": 12.99,
                    "description": "Tender chicken in a creamy tomato-based sauce",
                    "rating": {
                        "taste": 5,
                        "price_rating": 4,
                        "eyes_rating": 3,
                        "text_rating": "Delicious"
                    }
                },
                {
                    "name": "Lamb Rogan Josh",
                    "price": 14.99,
                    "description": "Lamb curry cooked in a yogurt-based sauce with spices",
                    "rating": {
                        "taste": 4,
                        "price_rating": 3,
                        "eyes_rating": 2,
                        "text_rating": "Nice"
                    }
                }
            ],
            "desserts": [
                {
                    "name": "Gulab Jamun",
                    "price": 4.99,
                    "description": "Deep-fried dough balls in a sweet syrup",
                    "rating": {
                        "taste": 5,
                        "price_rating": 4,
                        "eyes_rating": 3,
                        "text_rating": "Delicious"
                    }
                },
                {
                    "name": "Kulfi",
                    "price": 3.99,
                    "description": "Indian-style ice cream made with condensed milk and flavored with cardamom and saffron",
                    "rating": {
                        "taste": 4,
                        "price_rating": 3,
                        "eyes_rating": 2,
                        "text_rating": "Nice"
                    }
                }
            ]
        }
    },
    {
        restaurantid: "the_swedish_table",
        "resturantname": "The Swedish Table",
        "location": "Stockholm",
        "type": "Swedish",
        "menu": {
            "starters": [
                {
                    "name": "Gravlax",
                    "price": 6.99,
                    "description": "Cured salmon with dill and mustard sauce",
                    "rating": {
                        "taste": 4,
                        "price_rating": 3,
                        "eyes_rating": 2,
                        "text_rating": "Nice"
                    }
                },
                {
                    "name": "Meatballs",
                    "price": 4.99,
                    "description": "Swedish-style meatballs served with lingonberry jam",
                    "rating": {
                        "taste": 5,
                        "price_rating": 4,
                        "eyes_rating": 3,
                        "text_rating": "Delicious"
                    }
                }
            ],
            "main_dish": [
                {
                    "name": "Reindeer Stew",
                    "price": 14.99,
                    "description": "A traditional stew made with reindeer meat and root vegetables",
                    "rating": {
                        "taste": 4,
                        "price_rating": 3,
                        "eyes_rating": 2,
                        "text_rating": "Nice"
                    }
                },
                {
                    "name": "Smoked Salmon",
                    "price": 12.99,
                    "description": "Smoked salmon served with new potatoes and a dill cream sauce",
                    "rating": {
                        "taste": 5,
                        "price_rating": 4,
                        "eyes_rating": 3,
                        "text_rating": "Delicious"
                    }
                }
            ],
            "desserts": [
                {
                    "name": "Semla",
                    "price": 3.99,
                    "description": "A traditional Swedish pastry made with cardamom-spiced wheat bun and almond paste",
                    "rating": {
                        "taste": 4,
                        "price_rating": 3,
                        "eyes_rating": 2,
                        "text_rating": "Nice"
                    }
                },
                {
                    "name": "Rabarberkräm",
                    "price": 4.99,
                    "description": "Rhubarb cream dessert with a hint of vanilla",
                    "rating": {
                        "taste": 5,
                        "price_rating": 4,
                        "eyes_rating": 3,
                        "text_rating": "Delicious"
                    }
                }
            ]
        }
    },
    {
        restaurantid: "fjelltoppen_kjøkken",
        "resturantname": "Fjelltoppen Kjøkken",
        "location": "Oslo",
        "type": "Norwegian",
        "menu": {
            "starters": [
                {
                    "name": "Røkt laks",
                    "price": 6.99,
                    "description": "Smoked salmon with a dill and mustard sauce",
                    "rating": {
                        "taste": 4,
                        "price_rating": 3,
                        "eyes_rating": 2,
                        "text_rating": "Nice"
                    }
                },
                {
                    "name": "Fiskekaker",
                    "price": 4.99,
                    "description": "Norwegian-style fish cakes with a remoulade sauce",
                    "rating": {
                        "taste": 5,
                        "price_rating": 4,
                        "eyes_rating": 3,
                        "text_rating": "Delicious"
                    }
                }
            ],
            "main_dish": [
                {
                    "name": "Lapskaus",
                    "price": 12.99,
                    "description": "A traditional stew made with beef, potatoes and vegetables",
                    "rating": {
                        "taste": 4,
                        "price_rating": 3,
                        "eyes_rating": 2,
                        "text_rating": "Nice"
                    }
                },
                {
                    "name": "Fårikål",
                    "price": 14.99,
                    "description": "A traditional Norwegian dish made with mutton and cabbage",
                    "rating": {
                        "taste": 5,
                        "price_rating": 4,
                        "eyes_rating": 3,
                        "text_rating": "Delicious"
                    }
                }
            ],
            "desserts": [
                {
                    "name": "Multekrem",
                    "price": 3.99,
                    "description": "A dessert made with cloudberries, whipped cream and sugar",
                    "rating": {
                        "taste": 4,
                        "price_rating": 3,
                        "eyes_rating": 2,
                        "text_rating": "Nice"
                    }
                },
                {
                    "name": "Eplekake",
                    "price": 4.99,
                    "description": "A traditional Norwegian apple cake",
                    "rating": {
                        "taste": 5,
                        "price_rating": 4,
                        "eyes_rating": 3,
                        "text_rating": "Delicious"
                    }
                }
            ]
        }
    }









]


