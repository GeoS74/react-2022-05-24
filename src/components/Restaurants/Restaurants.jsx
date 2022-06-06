import React, {useState} from 'react';
import { Restaurant } from "../Restaurant/Restaurant";
import {Tabs} from "../Tabs/Tabs"

import styles from './styles.module.css';



export const Restaurants = ({restaurants}) => {
    const [activeRestaurant, setActiveRestaurant] = useState(0);


    const nextIndex = activeRestaurant !== restaurants.length-1 ? activeRestaurant+1 : 0;

    return (<div className={styles.root}>
        <div>
            <Tabs nextRestaurant={() => setActiveRestaurant(nextIndex)}/>
            <Restaurant restaurant={restaurants[activeRestaurant]}/>
        </div>
    </div>)
}