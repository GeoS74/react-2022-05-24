import React from "react";

export const Review = ({review}) => {
    let rev = review.map((rev) => <Review key={rev.id} user={rev.user} text={rev.text} rating={rev.rating}/>)
    console.log(rev)
    return(
        <div>
            <div> { rev.user } </div>
            <div> { rev.text } </div>
            <div> { rev.rating } </div>
        </div>
    )

}