import Image from 'next/image'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebook,
  faTwitter,
  faGithub,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
library.add(
  faFacebook,
  faTwitter,
  faGithub,
  faWhatsapp,
  faEnvelope);

export default function Home() {
  return (
    <div className={styles.fondo}>
      <div className={styles.container}>
        <header>
          <nav className={styles.menu}>
            <ul className={styles.ul_menu}>
              <li><a href="#contact" className={styles.primer_section_a}>Contact</a></li>
              <li><a href="#trabajos" className={styles.primer_section_a}>Work</a></li>
              <li><a href="#introduction" className={styles.primer_section_a}>About</a></li>
            </ul>
          </nav>
        </header>

        <section id='introduction' className={styles.introduction}>
          <h1 className={styles.h1_text}>Hey I am Víctor</h1>
          <span className={styles.sub_text}>a web developer</span>
        </section>

        <section id='trabajos' className={styles.trabajos}>
          <h2><u>There are some of my proyects</u></h2>
          <div className={styles.proyectos}>
            <a href="https://alexxanderrx.github.io/Windbnb_project/" target="_blank">
              <div className={styles.project}>
                <img src="./windbnb.jpg" />
                <p><span> &#60; </span>Windbnb<span> / &#62; </span></p>
              </div>
            </a>
            <a href="https://alexxanderrx.github.io/CalcularEdad.github.io/" target="_blank">
              <div className={styles.project}>
                <img src="./calcularEdad.jpg" />
                <p><span> &#60; </span>Calcular Edad<span> / &#62; </span></p>
              </div>
            </a>
            <a href="https://alexxanderrx.github.io/TipSelector/" target="_blank">
              <div className={styles.project}>
                <img src="./splitter.jpg" />
                <p><span> &#60; </span>TipSelector<span> / &#62; </span></p>
              </div>
            </a>
            <a href="https://weather-app-ivory-one.vercel.app/" target="_blank">
              <div className={styles.project}>
                <img src="./wheaterApp.jpg" alt='wheaterApp' />
                <p><span> &#60; </span>Weather App<span> / &#62; </span></p>
              </div>
            </a>
            <a href="https://poke-app-weld.vercel.app/" target="_blank">
              <div className={styles.project}>
                <img src="./pokeApp.jpg" />
                <p><span> &#60; </span>Pokémon App<span> / &#62; </span></p>
              </div>
            </a>
            <a href="#" target="_blank">
              <div className={styles.project}>
                <img src="http://placekitten.com/400/400" />
                <p><span> &#60; </span>Proyecto #1<span> / &#62; </span></p>
              </div>
            </a>
          </div>
        </section>

        <section id='contact' className={styles.contact}>
          <div className={styles.contact_text}>
            <h2>Lets work together...</h2>
            <p>How do you take your coffe?</p>
          </div>
          <ul>
            <li>
              <a href="https://www.facebook.com/Alexxanderrx/">
                <FontAwesomeIcon icon="fa-brands fa-facebook" style={{ color: "#ffffff" }} />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Alexxanderrx">
                <FontAwesomeIcon icon="fa-brands fa-github" style={{ color: "#ffffff" }} />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href="">
                <FontAwesomeIcon icon="fa-brands fa-twitter" style={{ color: "#ffffff" }} />
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href="mailto:alexmorales196@gmail.com">
                <FontAwesomeIcon icon="fa-regular fa-envelope" />
                <span>Send an email</span>
              </a>
            </li>
            <li>
              <a href="">
                <FontAwesomeIcon icon="fa-brands fa-whatsapp" style={{ color: "#ffffff" }} />
                <span>Call me</span>
              </a>
            </li>
          </ul>
        </section>
        <footer className={styles.footer}>
          <p>Created by Alexxanderrx © Copyright 2023</p>
        </footer>
      </div>


    </div>
  )
}
