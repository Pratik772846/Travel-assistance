import React from "react";
import axios from "axios";
// const city   = "jaipur";
import useCityStore from "../store/search_city.jsx";

// const addRestaurant = useCityStore(state => state.addRestaurant)

const getallrestaurants = (city)=>{
    // const city = useCityStore((state) => state.city);
    axios.get(`http://localhost:5000/restaurants/${city}`)
    .then((response)=>{
        console.log(response.data);
        // const restaurants = response.data;
        // restaurants.map(restaurant => {
        //     addRestaurant(restaurant)
        // })
    });
}

const getallplacestovisit = (city)=>{
    let URL = `http://localhost:5000/places_to_visit/${city}`;
    axios.get(URL)
    .then((response)=>{
        console.log(response.data);
    });
}
export {getallrestaurants,getallplacestovisit};

