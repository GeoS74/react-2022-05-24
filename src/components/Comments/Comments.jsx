import React from "react";
import {Comment} from "../Comment/Comment"

const feedback = {
    r1: ['очень вкусно!', ' всё понравилось +', 'Рекомендую ВСЕМ!!!'],
    r2: ['Долго готовят', 'Нашёл муху в супе', 'А мне норм'],
    r3: ['я банан', 'Гы-гы-гы', 'Лучшая шаверма на районе'],
    r4: ['Ням ням', 'Дети в восторге', 'Добавьте фисташковое в меню'],
}

export const Comments = ({id}) => {
    return <ul>
        <Comment comment={feedback[id][0]}/>
        <Comment comment={feedback[id][1]}/>
        <Comment comment={feedback[id][2]}/>
    </ul>
}