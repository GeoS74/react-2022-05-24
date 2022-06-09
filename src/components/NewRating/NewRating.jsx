import Star from "./img/star.svg";
import GoldStar from "./img/star-gold.svg";

import styles from "./styles.module.css";
import classnames from "classnames";
import {MAX_RATING} from "./constants";
import React, {useState} from 'react';

export const NewRating = () => {
    const [activeRating, setActiveRating] = useState(0)
  return (
      <div className="root">
        {new Array(MAX_RATING).fill(null).map((_, index) => (
            <img
                onClick={() => setActiveRating(index + 1)}
                src={index >= activeRating ? Star : GoldStar}
                key={index}
                className={styles.star}
                loading="lazy"
            />
        ))}
      </div>
  )
};
