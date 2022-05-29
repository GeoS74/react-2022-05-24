import React from "react";

export const MenuRestaurant = ({ restaurantName }) => {
    if (restaurantName == "CarambaRestaurant") {
        return (
            <div>
                <h3>Меню</h3>
                <ul>
                    <li>
                        Бодрящий кофе
                    </li>
                    <li>
                        Борщ
                    </li>
                    <li>
                        Гречка с мясом
                    </li>
                    <li>
                        Пероженное с кремом
                    </li>
                </ul>
            </div>
        );
    } else if (restaurantName == "restaurant 2") {
        return (
            <div>
                <h3>Меню</h3>
                <ul>
                    <li>
                        Освежающий сок
                    </li>
                    <li>
                        Окрошка
                    </li>
                    <li>
                        Макароны по флотски
                    </li>
                    <li>
                        Мороженное
                    </li>
                </ul>
            </div>
        );
    } else if (restaurantName == "restaurant 3") {
        return (
            <div>
                <h3>Меню</h3>
                <ul>
                    <li>
                        Согревающий чай
                    </li>
                    <li>
                        Рассольник
                    </li>
                    <li>
                        Пюре с котлетой
                    </li>
                    <li>
                        Вкусный тортик
                    </li>
                </ul>
            </div>
        );
    } else if (restaurantName == "restaurant 4") {
        return (
            <div>
                <h3>Меню</h3>
                <ul>
                    <li>
                        Шипучая газировка
                    </li>
                    <li>
                        Солянка
                    </li>
                    <li>
                        Плов с курицей
                    </li>
                    <li>
                        Блины с вареньем
                    </li>
                </ul>
            </div>
        );
    } else {
        return (
            <div>
                Нет меню
            </div>
        );
    }
}