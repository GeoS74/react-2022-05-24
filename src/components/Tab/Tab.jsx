import React from "react";
import styles from "./styles.module.css"

export const Tab = ({title, index, setActiveRestaurant}) => {
    return <button onClick={() => setActiveRestaurant(index)} className={styles.root}>{title}</button>
}