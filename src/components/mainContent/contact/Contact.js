import React, { useEffect } from "react";
import style from "./Contact.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="contact">
      <h1>Contact</h1>
      <div className={style.containerContact} data-aos="fade-right">
        <div className={style.contact}>
          <div className={style.content}>
            <ul className={style.listSocials}>
              <li>
                <a href="">
                  <img src="./assets/img/iconFacebook.png" />
                  @DulcefloCR
                </a>
              </li>
              <li>
                <a href="">
                  <img src="./assets/img/iconInstagram.png" />
                  @Dulce_flo
                </a>
              </li>
              <li>
                <a href="">
                  <img src="./assets/img/iconTiktok.png" />
                  @Dulce_floCR
                </a>
              </li>
            </ul>
            <img src="./assets/img/FlowerContact.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
