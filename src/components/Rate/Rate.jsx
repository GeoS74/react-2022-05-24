import React from "react";

import StarGold from "./imgs/star-gold.svg";
import Star from "./imgs/star.svg";

import styles from './styles.module.css';

export const Rate = ({rate}) => {
    let abc = [<img src={Star} className={styles.icon} loading="lazy"/>, 
               <img src={Star} className={styles.icon} loading="lazy"/>,
               <img src={Star} className={styles.icon} loading="lazy"/>,
               <img src={Star} className={styles.icon} loading="lazy"/>,
               <img src={Star} className={styles.icon} loading="lazy"/>,]
    for (let i = 0; i <= rate - 1; i++) {
        abc[i] = (<img src={StarGold} className={styles.icon} loading="lazy"/>)
        
    }
    return( 
        <div className={styles.rate}>
            {(abc)}
        </div>
    )
}