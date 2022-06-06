import React from "react";
import styles from "./styles.module.css"

export const Tabs = ({nextRestaurant}) => {
    
    return <button onClick={nextRestaurant} className={styles.root}>Click me</button>
}