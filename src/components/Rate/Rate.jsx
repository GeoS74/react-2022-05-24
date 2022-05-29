import React from "react"

import star from "./img/star.svg"
import starGold from "./img/star-gold.svg"
import styles from "./styles.module.css"


export const Rate = ({value}) => {
    const stars = [];
    for(let i = 0; i++ < 5;){
        stars.push((i > value) ? <img src={star} className={styles.star} key={i}></img>: <img src={starGold} className={styles.star} key={i}></img>)
    }

    return <div>
        {stars}
    </div>
}