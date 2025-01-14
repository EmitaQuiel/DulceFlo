import React from "react";
import style from "./Popular.module.css";
import CardFlower from "./CardFlower";

function Popular() {
  return (
    <section id="popular">
      <div className={style.containerPopular}>
        <div className={style.popular}>
          <div className={style.titles}>
            <h1>Popular</h1>
            <div className={style.titleH2}>
              <img src="./assets/img/iconFlower.png" />
              <h2>Products</h2>
            </div>
          </div>
          <div className={style.containerCards}>
            <div className={style.cards}>
              <CardFlower image={"./assets/img/Flower1.jpg"} text={"hola"} />
              <CardFlower image={"./assets/img/Flower2.jpg"} text={"hola"} />
              <CardFlower image={"./assets/img/Flower3.jpg"} text={"hola"} />
              <div />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Popular;
