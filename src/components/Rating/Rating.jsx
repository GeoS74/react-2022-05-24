import Star from "./img/star.svg";
import GoldStar from "./img/star-gold.svg";

import styles from "./styles.module.css";
import classnames from "classnames";
import {MAX_RATING} from "./constants";

export const Rating = ({ value, size = "medium", dispatch = _ => {} }) => {
  return (
      <div>
        {new Array(MAX_RATING).fill(null).map((_, index) => (
            <img
                src={index >= value ? Star : GoldStar}
                key={index}
                className={classnames(styles.star, styles[size])}
                loading="lazy"

                index={index+1}
                onClick={event => {
                    const index = event.target.getAttribute('index');
                    dispatch({type: 'changeRating', payload: index})
                }}
            />
        ))}
      </div>
  )
};
