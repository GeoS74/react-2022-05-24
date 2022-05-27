import React from 'react';
import ReactDOM from 'react-dom/client';
import { Restaurants } from "./components/Restaurants/Restaurants";
// import {Menu} from './components/Menu/Menu'

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <React.Fragment>
//         <Menu food="apple" obj={{name: "potato"}}><div>good</div></Menu>
//     </React.Fragment>
// )

root.render(
    <div id="reactRoot">
        <Restaurants/>
    </div>
);




// React.createElement('div', {
//     children: [
//         React.createElement('span', {
//             children: 'Hello!'
//         }),
//         React.createElement('div', {
//             children: [
//                 React.createElement('span', {children: 'World!'}),
//                 React.createElement('span', {children: 'Caramba!'})
//             ]
//         }),
//     ],
// })