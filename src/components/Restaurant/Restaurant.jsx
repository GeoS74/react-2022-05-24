import React from 'react';

import styles from "./styles.module.css";
import {Menu} from "../Menu/Menu";
import {Reviews} from "../Reviews/Reviews"
import { Rate} from "../Rate/Rate"


export const Restaurant = ({ restaurant }) => {
    return (
        <div className={styles.root}>
            <h1>{restaurant.name}</h1>
            <Rate rate={averageRating(restaurant.reviews)}/>
            <Menu menu={restaurant.menu}/>
            <Reviews reviews ={restaurant.reviews}/>
        </div>
    );
}

function averageRating(rat) {
    if (rat === 0 ) return 0

    let averageValue = 0
    for (let val of rat) {
        averageValue += val.rating
    }
    console.log(averageValue)
    return (averageValue/rat.length).toFixed(0)
}