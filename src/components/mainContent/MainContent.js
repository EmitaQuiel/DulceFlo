import React from "react";
import Hearo from "./hearo/Hearo";
import Popular from "./popular/Popular";
import Catalog from "./catalog/Catalog";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";

function MainContent() {
  return (
    <div>
      <Hearo />
      <Popular />
      <Catalog />
      <Blog />
      <Contact />
    </div>
  );
}

export default MainContent;
