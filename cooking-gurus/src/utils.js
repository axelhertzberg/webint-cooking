import {restaurantsdata} from "./data/data";

export function findRest(restName) {
    return restaurantsdata.find(rest => rest.restaurantid === restName)
}