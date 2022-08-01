import React from "react";
import styles from "./Header.module.scss";

import logo from "./../../assets/images/books-image.png";

const Header = () => {
    return (
        <header className={styles.Header}>
            {/* <img src={logo}></img> */}
            <img
                className={styles.Header__Logo}
                src={logo}
                alt="Book logo"
            ></img>
            <h1 className={styles.Header__Title}>Find Me Books!</h1>
            <h3 className={styles.Header__Subtitle}>Google Books Fetch API</h3>
        </header>
    );
};

export default Header;
