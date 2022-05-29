import React from "react";
import {Rate} from "../Rate/Rate"
import {Review} from "../Review/Review"

export const Reviews = ({reviews}) => {
    console.log(reviews)
    return <div>
        {reviews.map((review, index) => <Review key={index} review={review}/>)}
    </div>
}