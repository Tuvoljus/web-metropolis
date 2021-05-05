import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useAmp } from 'next/amp'
import styles from '../scss/Portfolio.module.scss'

import MQSolutions from './Modal'
import Falamex from './Modal'
import DonutBaellchen from './Modal'
import KeilBaumaschinen from './Modal'


export const config = { amp: 'hybrid' };

const SectionPortfolio = () => {    
    const [showModalQS, setShowModalQS] = useState(false);
    const [showModalFalamex, setShowModalFalamex] = useState(false);
    const [showModalDB, setShowModalDB] = useState(false);
    const [showModalKB, setShowModalKB] = useState(false);

    const [fade, setFade] = useState('');

    const showFade = () => {
        if(fade != 'fade') {
            setFade('fade')
        } else {
            setFade('');
        }
    }

    const pictureQS = '/img/q-solutions.jpg';
    const altQS = "Q-Solutions";
    const pictureFalamex = '/img/Falamex.jpg';
    const altFalamex = "Falamex";
    const pictureDB = '/img/donut-baellchen.jpg';
    const altDB = "Donut Bällchen";
    const pictureKB = '/img/keil-baumaschinen.jpg';
    const altKB = "Keil Baumaschinen";

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
                        <div className={`${styles.item} col-lg-3 col-md-6`}>
                                 
                                <a onClick={() => setShowModalQS(true)} >
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
                            <a onClick={() => setShowModalFalamex(true).modal('fade')}>
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
                            <a onClick={() => setShowModalDB(true)}>
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
                            <a onClick={() => setShowModalKB(true)}>
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
            <MQSolutions
                onClose={() => setShowModalQS(false)}
                show={showModalQS}
                picture={pictureQS}
                alt={altQS}
            >
                <h2> Q-Solutions</h2>
                <p className="lead">
                    Re-Design Website
                </p>
                <p>
                  Für die Q-Solutions GmbH aus München, welche Software liefert für den Wärmelieferungsmarkt, haben wir mit Hilfe des Frontend Frameworks Bootstrap das Design umgesetzt. 
                </p>
                <p>
                    Um die Seite mit Funktionalitäten zu erweitern, haben wir mit JavaScript die Button-Funktion im News-Bereich des jeweiligen Produkts konfortabel für den Benutzer die Informationen zum Produkt bereitgestellt.
                </p>
                <a href="https://www.q-solutions-gmbh.de" target="_blank" className="btn btn-primary">Visit website</a>
            </MQSolutions>            
            {/* <!-- End Modal Q-Solutions--> */}
            {/* <!-- Portfolio Falamex  */}
                 <Falamex
                onClose={() => setShowModalFalamex(false)}
                show={showModalFalamex}
                picture={pictureFalamex}
                alt={altFalamex}
            >
                <h2>Falamex</h2>
                <p className="lead">
                    Mexican Street Food
                </p>
                <p>
                    Unser Kunde Peter Moser hat eine von 2 Seiten in Auftrag gegeben: falamex.de und donut-baellchen.de
                    Falamex ist Gourmet-Mittagessen, dass der bekannten Speise Falafel eine mexikanische Geschmacksnote verleiht. 
                </p>                
                <a href="http://falamex.de"  target="_blank" className="btn btn-primary">Visit website</a>
            </Falamex>         
            {/* <!-- End Modal Falamex--> */}
            {/* <!-- Portfolio Donut Bällchen  */}
                 <DonutBaellchen
                onClose={() => setShowModalDB(false)}
                show={showModalDB}
                picture={pictureDB}
                alt={altDB}
            >
                <h2>Donut Bällchen</h2>
                <p className="lead">
                    Street Food
                </p>
                <p>
                    Donu Bällchen ist eine süße Delikatesse, welche auf Veranstaltungen und Street Festivals angeboten werden. 
                </p>
                <p>
                    Für unseren Kunden Peter Moser haben wir 2 Webseiten für seine Speise-Angebote Falamex, eine mexikanisches Falafel und Donut Bällchen umgesetzt 
                </p>
                <a href="https://www.donut-baellchen.de/"  target="_blank" className="btn btn-primary">Visit website</a>
            </DonutBaellchen>         
            {/* <!-- End Modal Donut Bällchen--> */}
            {/* <!-- Portfolio Keil Baumaschinen  */}
                 <KeilBaumaschinen
                onClose={() => setShowModalKB(false)}
                show={showModalKB}
                picture={pictureKB}
                alt={altKB}
            >
                <h2>Keil Baumaschinen</h2>
                <p className="lead">
                    Vermietung
                </p>
                <p>
                  Keil Baumaschinen vermietet Baumaschinen, Bau- und Gartengeräte. 
                </p>
                <p>
                    Für die Umsetzung der Seitengestaltung nutzten wir Bootstrap und für die Funktionalität JavaScript.
                </p>
                <a href="https://keil-baumaschinen.de"  target="_blank" className="btn btn-primary">Visit website</a>
            </KeilBaumaschinen>         
            {/* <!-- End Modal Keil Baumaschinen--> */}
            
            </section>
            {/* <!-- End Portfolio Section--> */}
        </>
    )
}

export default SectionPortfolio