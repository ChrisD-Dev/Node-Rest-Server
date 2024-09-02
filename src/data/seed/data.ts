import { BcryptAdapter } from "../../config";


const generate_upc = (): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}


export const seedData = {

    users: [
        {
            "name": "Luke Skywalker",
            "email": "luke.skywalker@starwars.com",
            "password": BcryptAdapter.hash("MayTheForceBeWithYou"),
            "roles": ['USER_ROLE', 'ADMIN_ROLE']
        },
        {
            "name": "Leia Organa",
            "email": "leia.organa@starwars.com",
            "password": BcryptAdapter.hash("RebelPrincess123")
        },
        {
            "name": "Han Solo",
            "email": "han.solo@starwars.com",
            "password": BcryptAdapter.hash("NeverTellMeTheOdds")
        }
    ],

    products: [
        {
            "upc": generate_upc(),
            "name": "Lightsaber",
            "price": 199.99,
            "available": true,
            "description": "A Jedi's weapon of choice."
        },
        {
            "upc": generate_upc(),
            "name": "Darth Vader Helmet",
            "price": 149.99,
            "available": true,
            "description": "Iconic helmet worn by Darth Vader."
        },
        {
            "upc": generate_upc(),
            "name": "Millennium Falcon Model",
            "price": 299.99,
            "available": false,
            "description": "A detailed model of the famous starship."
        },
        {
            "upc": generate_upc(),
            "name": "Stormtrooper Armor",
            "price": 399.99,
            "available": true,
            "description": "Full body armor of the Imperial Stormtroopers."
        },
        {
            "upc": generate_upc(),
            "name": "Yoda Action Figure",
            "price": 29.99,
            "available": true,
            "description": "Action figure of the wise Jedi Master Yoda."
        },
        {
            "upc": generate_upc(),
            "name": "Chewbacca Plush Toy",
            "price": 24.99,
            "available": true,
            "description": "A cuddly plush toy of Chewbacca."
        },
        {
            "upc": generate_upc(),
            "name": "R2-D2 Droid",
            "price": 129.99,
            "available": false,
            "description": "Interactive R2-D2 droid with lights and sounds."
        },
        {
            "upc": generate_upc(),
            "name": "Star Wars T-shirt",
            "price": 19.99,
            "available": true,
            "description": "Comfortable T-shirt with Star Wars print."
        },
        {
            "upc": generate_upc(),
            "name": "BB-8 Remote Control",
            "price": 89.99,
            "available": true,
            "description": "Remote control BB-8 droid."
        },
        {
            "upc": generate_upc(),
            "name": "Princess Leia Costume",
            "price": 59.99,
            "available": false,
            "description": "Classic costume of Princess Leia."
        },
        {
            "upc": generate_upc(),
            "name": "Han Solo Blaster",
            "price": 49.99,
            "available": true,
            "description": "Replica of Han Solo's blaster."
        },
        {
            "upc": generate_upc(),
            "name": "Kylo Ren Lightsaber",
            "price": 129.99,
            "available": true,
            "description": "Crossguard lightsaber of Kylo Ren."
        },
        {
            "upc": generate_upc(),
            "name": "Death Star LEGO Set",
            "price": 499.99,
            "available": false,
            "description": "Large LEGO set of the Death Star."
        },
        {
            "upc": generate_upc(),
            "name": "Rebel Alliance Mug",
            "price": 12.99,
            "available": true,
            "description": "Coffee mug with Rebel Alliance logo."
        },
        {
            "upc": generate_upc(),
            "name": "The Mandalorian Helmet",
            "price": 149.99,
            "available": true,
            "description": "Detailed helmet from The Mandalorian series."
        }
    ]
}