import React from "react"
import {Dish} from "./Dish"

const foods = {
    burger: ['Гамбургер', 'Чизбургер', 'БигМак', 'КрабсБургер'],
    soup: ['Борщ', 'Уха', 'Окрошка', 'Щи'],
    doner: ['Шаурма', 'Лаваш', 'Плов', 'Далма'],
    icecream: ['Пломбир', 'Клубничное мороженое', ' Фисташковое мороженое', 'Фруктовый лёд'],
}

export const Menu = ({food}) => {
    const eat = foods[food]
    return <ul>
        <Dish title={eat[0]}/>
        <Dish title={eat[1]}/>
        <Dish title={eat[2]}/>
        <Dish title={eat[3]}/>
    </ul>
}

// export class Menu extends React.PureComponent {
//     render(props) {
//         console.log(this)
//         return <>
//             <ul>
//                 <li>first</li>
//                 <li>f</li>
//             </ul>
//         </>
//     }
// }

// export function Menu({obj}) {
//     // console.log(props)
//     // console.log(arguments)

//     return <>
//         <ul>
//             <li>first</li>
//             <li>{obj.name}</li>
//         </ul>
//     </>
// }