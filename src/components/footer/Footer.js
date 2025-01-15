import React, { useEffect } from "react";
import style from "./Footer.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <footer>
      <div className={style.containerFooter} data-aos="fade-down">
        <img src="./assets/img/Logo.png" />

        <div className={style.content}>
          <h1>
            Bring your floral dreams to life with our personalized flower
            arrangements.
          </h1>
          <div className={style.button}>
            <input placeholder="Enter your email"></input>
            <button>Try Now</button>
          </div>
          <hr></hr>
          <div className={style.navbar}>
            <ul className={style.navList}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#popular">Popular</a>
              </li>
              <li>
                <a href="#catalog">Catalog</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
