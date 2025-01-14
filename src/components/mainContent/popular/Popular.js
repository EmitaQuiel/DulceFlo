import React from "react";
import style from "./Popular.module.css";

function Popular(){
    return(
        <section id="popular">
            <div className={style.containerPopular}>
                <div className={style.popular}>
                    <div className={style.titles}>
                        <h1>Popular</h1>
                        <h2>Products</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Popular;