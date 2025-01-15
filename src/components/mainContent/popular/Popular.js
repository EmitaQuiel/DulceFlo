import React, { useEffect } from "react";
import style from "./Popular.module.css";
import CardFlower from "./CardFlower";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Popular() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  return (
    <section id="popular">
      <div className={style.containerPopular}>
        <div className={style.popular}>
          <div className={style.titles} data-aos="fade-down">
            <h1>Popular</h1>
            <div className={style.titleH2}>
              <img src="./assets/img/iconFlower.png" alt="Flower Icon" />
              <h2>Products</h2>
            </div>
          </div>
          <div className={style.containerCards}>
            <div className={style.cards} data-aos="fade-up">
              <CardFlower
                image={"./assets/img/Flower1.jpg"}
                text={
                  "A classic symbol of love and passion, red roses are perfect for expressing deep romantic feelings on any special occasion."
                }
              />
              <CardFlower
                image={"./assets/img/Flower2.jpg"}
                text={
                  "Elegant and pure, white roses represent peace, innocence, and new beginnings, making them ideal for weddings and solemn celebrations."
                }
              />
              <CardFlower
                image={"./assets/img/Flower3.jpg"}
                text={
                  "Vibrant and full of joy, yellow roses symbolize friendship, happiness, and good wishes, perfect for sharing in joyful moments."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Popular;
