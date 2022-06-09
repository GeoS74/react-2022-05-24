import React from "react";
import { restaurants } from "../../constants/fixtures";

import styles from './styles.module.css';

export const Tabs = ({value, valRes}) => {
    const index = [restaurants].flat().findIndex(item => item.name === value)
    return (
        <div>
            <button 
                className={styles.textRestaurant}
                onClick ={() => valRes(index)}
                >
                {value}
            </button>
        </div>
    )
};
