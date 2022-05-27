import React from 'react';
import { Restaurant } from "../Restaurant/Restaurant";

export const Restaurants = () => {
    const restaurantName = 'CarambaRestaurant';
    return (
        <>
            <div>
                <Restaurant restaurantName={restaurantName} food="burger" id="r1"/>
            </div>
            <div>
                <Restaurant restaurantName="restaurant 2" food="soup" id="r2"/>
            </div>
            <div>
                <Restaurant restaurantName="restaurant 3" food="doner" id="r3"/>
            </div>
            <div>
                <Restaurant restaurantName="restaurant 4" food="icecream" id="r4"/>
            </div>
        </>
    );
}