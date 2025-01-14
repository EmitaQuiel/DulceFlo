import React from "react";
import style from "./Blog.module.css";
import CardBlog from "./CardBlog";

function Blog() {
  return (
    <section id="blog">
      <div className={style.containerBlog}>
        <div className={style.blog}>
          <h1>BLOG</h1>
          <div className={style.cardsBlog}>
            <CardBlog
              image={"./assets/img/HorizontalFlower1.jpg"}
              title={"Sakura"}
              text={
                "The Sakura, or cherry blossom, is a symbol of beauty, transience, and renewal. Known for its delicate pink petals, it blooms in spring, transforming landscapes into picturesque scenes. In Japan, the Sakura is deeply loved, often celebrated with festivals, symbolizing the fleeting nature of life and the hope of new beginnings."
              }
            />
            <CardBlog
              image={"./assets/img/HorizontalFlower2.jpg"}
              title={"Hydrangea"}
              text={
                "Hydrangeas are lush, vibrant flowers that symbolize gratitude and grace. With their large, round blooms in shades of blue, pink, and white, they are often seen as a gift of appreciation. These flowers are also a symbol of understanding and heartfelt emotions, making them a popular choice for both gardens and floral arrangements."
              }
            />
            <CardBlog
              image={"./assets/img/HorizontalFlower3.jpg"}
              title={"Daffodil"}
              text={
                "The Daffodil is a bright and cheerful spring flower, symbolizing renewal, rebirth, and new beginnings. With its golden-yellow petals and trumpet-shaped center, it represents hope and the promise of brighter days ahead. Often associated with the first days of spring, Daffodils are a symbol of resilience and the joy of life’s new chapters."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
