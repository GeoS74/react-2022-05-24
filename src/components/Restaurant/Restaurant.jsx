import React from 'react';

import styles from'./styles.module.css';
import {Menu} from "../Menu/Menu";
import {Rate} from "../Rate/Rate";
import {Reviews} from "../Reviews/Reviews"

export const Restaurant = ({ restaurant }) => {
    // console.log(restaurant)

    return (
        <div className={styles.root}>
            <h1>{restaurant.name}</h1>
            <Rate value={avarageValue(restaurant.reviews)}/>
            <Menu menu={restaurant.menu}/>
            <Reviews reviews={restaurant.reviews} />
        </div>
    );
}

//возвращает среднее целое значение
function avarageValue(reviews){
    if(reviews.length === 0) return 0;

    let val = 0
    for(const r of reviews) {
        val += r.rating
    }
   return (val/reviews.length).toFixed(0) 
}