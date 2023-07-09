import Image from 'next/image'
import styles from './page.module.css'

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
            <a href="#" target="_blank">
              <div className={styles.project}>
                <img src="http://placekitten.com/400/400" />
                <p><span> &#60; </span>Proyecto #1<span> / &#62; </span></p>
              </div>
            </a>
            <a href="https://alexxanderrx.github.io/Windbnb_project/" target="_blank">
              <div className={styles.project}>
                <img src="http://placekitten.com/400/400" />
                <p><span> &#60; </span>Windbnb<span> / &#62; </span></p>
              </div>
            </a><a href="https://alexxanderrx.github.io/CalcularEdad.github.io/" target="_blank">
              <div className={styles.project}>
                <img src="http://placekitten.com/400/400" />
                <p><span> &#60; </span>Calcular Edad<span> / &#62; </span></p>
              </div>
            </a><a href="https://alexxanderrx.github.io/TipSelector/" target="_blank">
              <div className={styles.project}>
                <img src="http://placekitten.com/400/400" />
                <p><span> &#60; </span>TipSelector<span> / &#62; </span></p>
              </div>
            </a><a href="https://weather-app-ivory-one.vercel.app/" target="_blank">
              <div className={styles.project}>
                <img src="http://placekitten.com/400/400" />
                <p><span> &#60; </span>Weather App<span> / &#62; </span></p>
              </div>
            </a><a href="https://poke-app-weld.vercel.app/" target="_blank">
              <div className={styles.project}>
                <img src="http://placekitten.com/400/400" />
                <p><span> &#60; </span>Pokémon App<span> / &#62; </span></p>
              </div>
            </a>
          </div>
        </section>

        <section id='contact' className={styles.contact}>
          <div className={styles.contact_text}>
            <h2>Lets work together...</h2>
            <p>How do you take your coffe?</p>
          </div>
          <ul className={styles.redes}>
            <li>
              <a href=""><i className="fa-brands fa-facebook" style={{ color: "#ffffff" }}></i><span>Facebook</span></a>
            </li>
            <li>
              <a href=""><i className="fa-brands fa-github" style={{ color: "#ffffff" }}></i><span>GitHub</span></a>
            </li>
            <li>
              <a href=""><i className="fa-brands fa-twitter" style={{ color: "#ffffff" }}></i><span>Twitter</span></a>
            </li>
            <li>
              <a href=""><i className="fa-sharp fa-regular fa-envelope" style={{ color: "#ffffff" }}></i><span>Send an email</span></a>
            </li>
            <li>
              <a href=""><i className="fa-brands fa-whatsapp" style={{ color: "#ffffff" }}></i><span>Call me</span></a>
            </li>
          </ul>
        </section>
        <footer className={styles.footer}>

        </footer>
      </div>


    </div>
  )
}
