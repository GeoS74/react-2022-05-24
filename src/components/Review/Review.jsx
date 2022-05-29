import React from "react";
import { Rate } from "../Rate/Rate";

export const Review = ({review}) => {
    console.log(review)
    return <div>
            <b>{review.user}</b>
            <Rate value={review.rating}/> 
            Comment: <i>{review.text}</i>
    </div>
}