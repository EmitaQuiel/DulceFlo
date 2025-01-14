import React from "react";
import style from "./CardBlog.module.css";

function CardBlog({image, title, text}) {
  return (
    <div className={style.card}>
      <img src={image} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}
export default CardBlog;
