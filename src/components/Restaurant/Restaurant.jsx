import React from 'react';
import { Menu } from "../Menu/Menu"
import { Comments } from "../Comments/Comments"

export const Restaurant = ({ restaurantName, food, id }) => {
    return <>
        <h3>{restaurantName || 'unknown restaurant'}</h3>
        <p>Меню:</p>
        <Menu food={food || 'burger'} />
        <p>Отзывы:</p>
        <Comments id={id || 1} />
    </>
}