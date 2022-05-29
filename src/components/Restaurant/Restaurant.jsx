import React from 'react';

export const Restaurant = ({ restaurantName }) => {
    return (
        <div><h1>{restaurantName || 'unknown restaurant'}</h1></div>
    );
}