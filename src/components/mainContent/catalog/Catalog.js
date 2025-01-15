import React, { useEffect } from "react";
import style from "./Catalog.module.css";
import CatalogCard from "./CatalogCard";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Catalog() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

    return(
        <section id="catalog">
            <div className={style.containerCatalog}  data-aos="zoom-in">
                <div className={style.catalog}>
                    <h1>Catalog</h1>
                    <div className={style.ContainerCardCenter}>
                        <CatalogCard text={"The rose symbolizes love.."}/>
                        <CatalogCard text={"The sunflower radiates joy."}/>
                        <CatalogCard text={"The tulip inspires elegance."}/>
                    </div>
                    <img src="./assets/img/PlantCatalog.jpg"/>
                    <div className={style.containerCardLeft}>
                    <CatalogCard text={"The hibiscus evokes tranquility."}/>
                    <CatalogCard text={"The sakura reflects renewal."}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Catalog;