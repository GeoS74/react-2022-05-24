import React from "react";
import { Rate } from "../Rate/Rate";

export const Review = ({review}) => {
    console.log(review)
    return <div>
            <b>{review.user}</b>: 
            {review.text}
        <Rate value={review.rating}/>
    </div>
}