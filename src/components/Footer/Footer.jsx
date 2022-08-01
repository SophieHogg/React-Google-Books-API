import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <a href="https://github.com/SophieHogg">
                <div className={styles.Footer__LinkDiv}>GitHub</div>
            </a>

            <a href="https://www.linkedin.com/in/sophiehogg1/">
                {" "}
                <div className={styles.Footer__LinkDiv}>LinkedIn </div>
            </a>
        </div>
    );
};

export default Footer;
