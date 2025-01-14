import React from "react";
import style from "./CardFlower.module.css";

function CardFlower({ image, text }) {
  return (
    <div className={style.containerCard}>
      <div className={style.card}>
        <img src={image} />
        <p>{text}</p>
      </div>
    </div>
  );
}

export default CardFlower;
