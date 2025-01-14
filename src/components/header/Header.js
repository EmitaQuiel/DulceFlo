import React from "react";
import styles from "./Header.module.css";

function Header(){
    return(
        <header>
            <div className={styles.containerHeader}>
                <div className={styles.nav}>
                    <div className={styles.logo}>
                        <img src="/assets/img/Logo.png" alt="logo"/>
                    </div>
                    <ul className={styles.navList}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#popular">Popular</a></li>
                        <li><a href="#catalog">Catalog</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;