import {Product} from "../Product/Product";
import styles from "./styles.module.css";

export const Menu = ({menu}) => (<div>
    {
        menu.map((product) => <Product key={product.id} name={product.name}/>)     
    
    }
    
</div>);
