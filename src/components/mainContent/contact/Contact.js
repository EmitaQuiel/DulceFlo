import React from "react";
import style from "./Contact.module.css";

function Contact() {
  return (
    <section id="contact">
        <h1>Contact</h1>

      <div className={style.containerContact}>
        <div className={style.contact}>
          <div className={style.content}>
            <ul className={style.listSocials}>
              <li>
                <a href="">
                  <img src="./assets/img/iconFacebook.png" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="">
                  <img src="./assets/img/iconInstagram.png" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="">
                  <img src="./assets/img/iconTiktok.png" />
                  Tiktok
                </a>
              </li>
            </ul>
          </div>
          <div className={style.content2}>
                <img src="./assets/img/FlowerContact.jpg"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
