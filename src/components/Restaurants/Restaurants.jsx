import React from 'react';
import { Restaurant } from "../Restaurant/Restaurant";
import { MenuRestaurant } from '../MenuRestaurant/MenuRestaurant';
import { Comments } from '../Comments/Comments';

export const Restaurants = () => {
    const restaurantName = 'CarambaRestaurant';
    return (
        <>
            <div>
                <Restaurant restaurantName={restaurantName} />
                <MenuRestaurant restaurantName={restaurantName} />
                <Comments restaurantName={restaurantName} />
            </div>
            <div>
                <Restaurant restaurantName="restaurant 2"/>
                <MenuRestaurant restaurantName="restaurant 2"/>
                <Comments restaurantName="restaurant 2" />
            </div>
            <div>
                <Restaurant restaurantName="restaurant 3"/>
                <MenuRestaurant restaurantName="restaurant 3"/>
                <Comments restaurantName="restaurant 3" />
            </div>
            <div>
                <Restaurant restaurantName="restaurant 4"/>
                <MenuRestaurant restaurantName="restaurant 4"/>
                <Comments restaurantName="restaurant 4" />
            </div>
        </>
    );
}