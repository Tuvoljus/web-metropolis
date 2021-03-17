import Link from 'next/link'
import Image from 'next/image'
import { useAmp } from 'next/amp'
import styles from '../scss/Service.module.scss'
import icons from '../scss/Icons.module.scss'

export const config = { amp: 'hybrid' }

const SectionService = () => {
    return (
        <>
          <section id="services" className={`services ${styles.backgroundGray}`}>       
            <div className="container text-center">
              <header>
                <h1 className="small-heading">
                  Our Services
                </h1>
                <h2>
                  Wir sind gut in
                </h2>
              </header>
              <div className="row">
                {/* Item*/}
                <div className={`col-lg-4 col-md-6 ${styles.item}`} >
                  <div className={styles.icon}>
                    <svg className={[icons.icon].join("")}>
                      <use xlinkHref="symbol-defs.svg#icon-layer-icon">
                      </use>
                    </svg>
                  </div>
                  <h3 className="h5">
                    Web Design
                  </h3>
                  <p>
                    Ganz oder garnicht. 
                    Stets immer das passende Design für Ihr Produkt,
                    Dienstleistung, oder Unternehmensprofil.
                  </p>
                </div>
                {/* Item*/}
                <div className={`col-lg-4 col-md-6 ${styles.item}`}>
                  <div className={styles.icon}>
                    <svg className={[icons.icon].join("")}>
                      <use xlinkHref="symbol-defs.svg#icon-webDevelopment">
                      </use>
                    </svg>
                  </div>
                  <h3 className="h5">Web Development / SEO</h3>
                  <p>
                  Ihre Seite soll mehr können als nur gut aussehen
                   und nicht nur interactive sein?
                  Wir binden Datenbanken ein und erweitern Ihre Seite mit tollen Funktionen!                                     
                  </p>
                </div>
                {/* Item*/}
                <div className={`col-lg-4 col-md-6 ${styles.item}`}>
                  <div className={styles.icon}>
                    <svg className={[icons.icon].join("")}>
                      <use xlinkHref="symbol-defs.svg#icon-mobileDesign">
                      </use>
                    </svg>
                  </div>
                  <h3 className="h5">Mobile Design</h3>
                  <p>
                  Der Anteil der User, die Internetseiten über das Smartphone besuchen, steigt stetig,
                  deshalb sollte auch Ihre Seite optimal auf allen Wiedergabegeräten angezeigt werden. 
                  </p>
                </div>
                {/* Item*/}
                <div className={`col-lg-4 col-md-6 ${styles.item}`}>
                  <div className={styles.icon}>
                    <svg className={[icons.icon].join("")}>
                      <use xlinkHref="symbol-defs.svg#icon-3DCube">
                      </use>
                    </svg>
                  </div>
                  <h3 className="h5">3D</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                {/* Item*/}
                <div className={`col-lg-4 col-md-6 ${styles.item}`}>
                  <div className={styles.icon}>
                    <svg className={[icons.icon].join("")}>
                      <use xlinkHref="symbol-defs.svg#icon-3DKonfigurator">
                      </use>
                    </svg>
                  </div>
                  <h3 className="h5">webbasierte 3D Konfiguratoren</h3>
                  <p>
                    Mithilfe von webGL können wir Ihre Produkte als 3D Objekt konfigurierbar machen 
                    oder virtuelle Rundgänge erstellen.
                    Der Nutzen liegt in der besseren Vorstellung der Seitenbesucher Ihrer Produkte indem vertiefte Sicht und Erklärung Ihrer Produkte und Angebot bieten.          
                  </p>
                </div>
                {/* Item*/}
                <div className={`col-lg-4 col-md-6 ${styles.item}`}>
                  <div className={styles.icon}>
                    <svg className={[icons.icon].join("")}>
                      <use xlinkHref="symbol-defs.svg#icon-Video">
                      </use>
                    </svg>
                  </div>
                  <h3 className="h5">Videos</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                  </p>
                </div> 
              </div>
            </div>
          </section>
        </>
    )
}

export default SectionService