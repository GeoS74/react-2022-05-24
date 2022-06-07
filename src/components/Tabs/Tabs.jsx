import React from "react";
import styles from "./styles.module.css"
import {Tab} from "../Tab/Tab"

export const Tabs = ({restaurants, setActiveRestaurant}) => {
   return <div className={styles.root}>
      {restaurants.map((restaurant, i) => <Tab setActiveRestaurant={setActiveRestaurant} title={restaurant.name} index={i} key={restaurant.id}/>)}
   </div>
}