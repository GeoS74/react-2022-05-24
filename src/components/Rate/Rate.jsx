import React from "react";

import StarGold from "./imgs/star-gold.svg";
import Star from "./imgs/star.svg";

import styles from './styles.module.css';

export const Rate = ({rate}) => {
    if (rate === 1) {
        return(
            <div>                
                <img src={StarGold} className={styles.icon} loading="lazy"/>             
                <img src={Star} className={styles.icon} loading="lazy"/>
                <img src={Star} className={styles.icon} loading="lazy"/>
                <img src={Star} className={styles.icon} loading="lazy"/>
                <img src={Star} className={styles.icon} loading="lazy"/>
            </div>
        )

    } else if (rate === 2) {
        return(
            <div>                
                <img src={StarGold} className={styles.icon} loading="lazy"/>             
                <img src={StarGold} className={styles.icon} loading="lazy"/>
                <img src={Star} className={styles.icon} loading="lazy"/>
                <img src={Star} className={styles.icon} loading="lazy"/>
                <img src={Star} className={styles.icon} loading="lazy"/>
            </div>
    )
    } else if (rate === 3) {
        return(
            <div>                
                <img src={StarGold} className={styles.icon} loading="lazy"/>             
                <img src={StarGold} className={styles.icon} loading="lazy"/>
                <img src={StarGold} className={styles.icon} loading="lazy"/>
                <img src={Star} className={styles.icon} loading="lazy"/>
                <img src={Star} className={styles.icon} loading="lazy"/>
            </div>
    )
    } else if (rate === 4) {
        return(
            <div>                
                <img src={StarGold} className={styles.icon} loading="lazy"/>             
                <img src={StarGold} className={styles.icon} loading="lazy"/>
                <img src={StarGold} className={styles.icon} loading="lazy"/>
                <img src={StarGold} className={styles.icon} loading="lazy"/>
                <img src={Star} className={styles.icon} loading="lazy"/>
            </div>
    )
    } else  {
        return(
            <div>                
                <img src={StarGold} className={styles.icon} loading="lazy"/>             
                <img src={StarGold} className={styles.icon} loading="lazy"/>
                <img src={StarGold} className={styles.icon} loading="lazy"/>
                <img src={StarGold} className={styles.icon} loading="lazy"/>
                <img src={StarGold} className={styles.icon} loading="lazy"/>
            </div>
    )
    }
    

}