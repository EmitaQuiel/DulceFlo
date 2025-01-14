import React from "react";
import style from "./Hearo.module.css";

function Hearo() {
  return (
    <section id="home">
      <div className={style.containerHearo}>
        <div className={style.hearo}>
          <img src="./assets/img/Hearo.jpg" alt="imgHearo" />
          <div className={style.infoHearo}>
            <img src="./assets/img/Logo.png" />
            <p>
              In DulceFlo, we transform a moment into something special with our
              beautiful fresh flowers. Whether it's to celebrate a birthday,
              decore your home or express your sentiments, we have the
              arrangements for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hearo;
