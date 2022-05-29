import React from "react";

export const Comments = ({ restaurantName }) => {
    if (restaurantName === "CarambaRestaurant") {
        return (
            <div>
                <h3>Отзывы и предложения</h3>
                <p>Бывал в местах и получше</p>
                <p>Просто офффигенно!! ни чего лучше не ел</p>
                <p>Быстро недорого удобно. Всем рекомендую</p>
            </div>
        );
    } else if (restaurantName === "restaurant 2") {
        return (
            <div>
                <h3>Отзывы и предложения</h3>
                <p>Не было солонки</p>
                <p>А че хлеб такой жесткий</p>
                <p>Соль насыпана в сахарницу</p>
            </div>
        );
    } else if (restaurantName === "restaurant 3") {
        return (
            <div>
                <h3>Отзывы и предложения</h3>
                <p>Вот это сервис просто супер!!!!</p>
                <p>Обязательно вернемся еще раз</p>
                <p>Чем то пахло из кухни</p>
            </div>
        );
    } else if (restaurantName === "restaurant 4") {
        return (
            <div>
                <h3>Отзывы и предложения</h3>
                <p>Все норм</p>
                <p>Наелся от пуза. Всем рекомендую</p>
                <p>Сделайте столики для котов!!!</p>
            </div>
        );
    } else {
        return (
            <div>
                Нет Коментов
            </div>
        );
    }    
}