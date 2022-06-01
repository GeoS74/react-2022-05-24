import React from 'react';

import styles from "./styles.module.css";
import {Menu} from "../Menu/Menu";
import {Reviews} from "../Reviews/Reviews"
import { Review } from "../Review/Review";
import { Rate} from "../Rate/Rate"


export const Restaurant = ({ restaurant }) => {
    return (
        <div className={styles.root}>
            <h1>{restaurant.name}</h1>
            <Reviews />
            <Menu menu={restaurant.menu}/>
            <Review review ={restaurant.reviews}/>
            <Rate rate={5}/>
        </div>
    );
}