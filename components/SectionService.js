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
                    Wir entwickeln für Sie das passende Design für Ihr Unternehmen.
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
                  <h3 className="h5">Web Development</h3>
                  <p>
                    Ihre Seite soll mehr können?
                    Wir binden Datenbanken und viele andere Funktionen zu 
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
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
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
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