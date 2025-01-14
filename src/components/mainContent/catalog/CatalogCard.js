import React from "react";
import style from "./CatalogCard.module.css";

function CatalogCard({text}){
    return(
        <div className={style.card}>
            <h3>{text}</h3>
        </div>
    )
}

export default CatalogCard;