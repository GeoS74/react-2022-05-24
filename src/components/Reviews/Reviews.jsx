import React from "react";
import { Review } from "../Review/Review"

export const Reviews = ({reviews}) => {
    let rating = reviews.map((rating) =>        
        <Review key={rating.id} user={rating.user} text={rating.text} rating={rating.rating}/>
        )
    
    return rating
}
