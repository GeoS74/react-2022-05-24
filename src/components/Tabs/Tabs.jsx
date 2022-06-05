import React from "react";
import { restaurants } from "../../constants/fixtures";

import styles from './styles.module.css';

export const Tabs = ({value}) => {
    console.log()
    return (
        <div>
            <button 
                className={styles.textRestaurant}
                onClick ={() => console.log([restaurants].flat().findIndex(item => item.name === value))}
                >
                {value}
            </button>
        </div>
    )
};