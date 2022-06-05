import React from "react";
import Logo from "./img/logo.svg";
import styles from "./styles.module.css";
import { type } from "@testing-library/user-event/dist/type";



export const Header = () => {
  
  return (
    <header className={styles.root}>          
      <div>
        <img src={Logo} className={styles.logo} alt="logo" />
      </div>
    </header>
  )
};
