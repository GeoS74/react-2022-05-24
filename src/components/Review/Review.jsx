import React from "react";
import { Rate } from "../Rate/Rate";

export const Review = ({user, text, rating}) => {
    let rate = <Rate rate={rating} />
    return(
        <div>
            <div>{user}</div>
            <div>{text}</div>
            <div>{rate}</div>
        </div>
    )
}