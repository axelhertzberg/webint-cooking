import {restaurantsdata} from "./data/data";

export function findRest(restName) {
    return restaurantsdata.find(rest => rest.restaurantid === restName)
}

export function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    console.log("keys", keys)
    while (i--) {
        console.log("inside")
        values.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    return values;
}