import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useAmp } from 'next/amp'
import styles from '../scss/Portfolio.module.scss'

import MQSolutions from './ModalQSolutions'

export const config = { amp: 'hybrid' };

const SectionPortfolio = () => {    
    const [showedModal, setShowedModal] = useState('');
    const [showedBlock, setShowedBlock] = useState('none');
    const [fade, setFade] = useState('');

    const showModal = () => {
        if(showedModal != 'show') {
            setShowedModal('show');
            setShowedBlock('block');
            setFade('fade')
        } else {
            setShowedModal('');
            setShowedBlock('none');
            setFade('')
        }    
    };

    const display = showedBlock;

    const divStyle = {
        display: display,
        paddingRight: '17px',
    }

    const isAmp = useAmp();
    return (
        <>
            {/* <!-- Portfolio Section--> */}
            <section id="portfolio" className="portfolio">            
            <div className="container-fluid text-center">
                <header>
                    <h1 className="small-heading">
                        Portfolio
                    </h1>
                    <h2>
                        Unsere Kundenprojekte                        
                    </h2>
                </header>
               
                <div className="row">
                        <div  className={`${styles.item} col-lg-3 col-md-6`}>
                                 
                                <a onClick={showModal}>
                                    {isAmp ? (
                                        <amp-img layout="responsive" width="700" height="700" src="/img_webp/q-solutions.webp" alt="Q-Solutions" />
                                    ):(
                                        <Image layout='responsive' src="/img/q-solutions.jpg" width={700} height={700} alt="Alexander Keil" />
                                    )}                                      
                                    <div className={[styles.overlay]}>
                                        <div className="content">
                                            <h2 style={{color: 'red'}}>
                                                Q-Solutions GmbH
                                            </h2>
                                            <p style={{color: 'black'}}>
                                                Web Projekt
                                            </p>
                                        </div>
                                    </div>
                                </a>

                    </div>
                {/* <!-- End Item--> */}
                
                        <div className={`${styles.item} col-lg-3 col-md-6`}>
                            <a onClick={showModal}>
                                {isAmp ? 
                                (<amp-img layout="responsive" width="700" height="700" src="/img_webp/Falamex.webp" alt="Falamex"/>
                                ) : (
                                <Image layout='responsive' src="/img/Falamex.jpg" width={700} height={700} alt="Falamex" />
                                )}                               
                                <div className={[styles.overlay]}>
                                    <div className="content">
                                        <h2 style={{color: 'red'}}>
                                            Falamex
                                        </h2>
                                        <p style={{color: 'black'}}>
                                            Web Projekt
                                        </p>
                                     </div>
                                </div>
                            </a>
                        </div>
                {/* <!-- End Item--> */}
                
                        <div className={`${styles.item} col-lg-3 col-md-6`}>
                            <a href="#" data-toggle="modal" data-target="#portfolio-item1">
                                {isAmp ? (
                                    <amp-img layout='responsive' src="/img_webp/donut-baellchen.webp" width="700" height="700" alt="Donut Bällchen"/>
                                ):(
                                    <Image layout='responsive' src="/img/donut-baellchen.jpg" width={700} height={700} height="700" alt="Donut Bällchen" />
                                )}                              

                                <div className={[styles.overlay]}>
                                    <div className="content">
                                        <h2 style={{color: 'red'}}>
                                            Donut Bällchen
                                        </h2>
                                        <p style={{color: 'black'}}>
                                            Web Projekt
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                {/* <!-- End Item--> */}                
                        <div className={`${styles.item} col-lg-3 col-md-6`}>
                            <a href="#">
                                {isAmp ? (
                                    <amp-img layout='responsive' src="/img_webp/keil-baumaschinen.webp" width="700" height="700" alt="Keil Baumaschinen" />
                                ) :(
                                <Image layout='responsive' src="/img/keil-baumaschinen.jpg" width={700} height={700} alt="Keil Baumaschinen" />
                                )}                               
                                <div className={[styles.overlay]}>
                                    <div className="content">
                                        <h2 style={{color: 'red'}}>
                                            Keil Baumaschinen
                                        </h2>
                                        <p style={{color: 'black'}}>
                                            Web Projekt
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                {/* <!-- End Item--> */}               
                </div>
            </div>
            {/* <!-- Portfolio Q-Solutions  */}
            <div id="portfolio-item1" role="dialog" aria-hidden="true" className={`modal ${styles.modal} ${showedModal} ${fade}`} style={divStyle}>
                <div role="document" className={`modal-dialog  ${styles.modalDialog}`}>
                    <div className={`modal-content ${styles.modalContent}`}>
                            <button onClick={showModal} type="button" data-bs-dismiss="modal" aria-label="Close" className={`${styles.closeButton} btn-close`}>
                                <span aria-hidden="true">
                                    <i className="close-icon" >
                                    </i>
                                </span>
                            </button>
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="mockup col-lg-6">
                                    <div className="device-mockup">
                                        <div data-device="Macbook2015" data-orientation="portrait" data-color="gold" className="device device">
                                            <div className="screen">
                                                Image
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text col-lg-6 text-center text-lg-left mt-5 mt-lg-0">
                                    <h2>
                                        Q-Solutions                                          
                                    </h2>
                                    <p className="lead">
                                        Re-Design Website 
                                    </p>
                                    <p>
                                        Für die Q-Solutions GmbH aus München, welche Software liefert für den Wärmelieferungsmarkt, haben wir mit Hilfe des Frontend Frameworks Bootstrap das Design umgesetzt. 
                                    </p>
                                    <p>
                                        Um die Seite mit Funktionalitäten zu erweitern, haben wir mit JavaScript die Button-Funktion im News-Bereich des jeweiligen Produkts konfortabel für den Benutzer die Informationen zum Produkt bereitgestellt.
                                    </p>
                                    <a href="#" className="btn btn-primary">
                                        Visit website
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Modal Q-Solutions--> */}
            {/* <!-- Portfolio Falamex  */}
            <div id="portfolio-item1" role="dialog" aria-hidden="true" className={`modal ${styles.modal} ${showedModal} ${fade}`} style={divStyle}>
                <div role="document" className={`modal-dialog  ${styles.modalDialog}`}>
                    <div className={`modal-content ${styles.modalContent}`}>
                            <button onClick={showModal} type="button" data-bs-dismiss="modal" aria-label="Close" className={`${styles.closeButton} btn-close`}>
                                <span aria-hidden="true">
                                    <i className="close-icon" >
                                    </i>
                                </span>
                            </button>
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="mockup col-lg-6">
                                    <div className="device-mockup">
                                        <div data-device="Macbook2015" data-orientation="portrait" data-color="gold" className="device device">
                                            <div className="screen">
                                                Image
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text col-lg-6 text-center text-lg-left mt-5 mt-lg-0">
                                    <h2>
                                        Q-Solutions                                          
                                    </h2>
                                    <p className="lead">
                                        Re-Design Website 
                                    </p>
                                    <p>
                                        Für die Q-Solutions GmbH aus München, welche Software liefert für den Wärmelieferungsmarkt, haben wir mit Hilfe des Frontend Frameworks Bootstrap das Design umgesetzt. 
                                    </p>
                                    <p>
                                        Um die Seite mit Funktionalitäten zu erweitern, haben wir mit JavaScript die Button-Funktion im News-Bereich des jeweiligen Produkts konfortabel für den Benutzer die Informationen zum Produkt bereitgestellt.
                                    </p>
                                    <a href="#" className="btn btn-primary">
                                        Visit website
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Modal Falamex--> */}
            </section>
            {/* <!-- End Portfolio Section--> */}
        </>
    )
}

export default SectionPortfolio