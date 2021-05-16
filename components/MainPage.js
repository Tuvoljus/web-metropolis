import Link from 'next/link'
import NextScript from 'next/document'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useAmp } from 'next/amp'
const SectionAbout = dynamic(() => import('./SectionAbout'))
const SectionNews = dynamic(() => import('./SectionNews'))
const SectionService = dynamic(() => import('./SectionService'))
const SectionPortfolio = dynamic(() => import('./SectionPortfolio'))




export const config = { amp: 'hybrid' }

const MainPage = () => {
    const isAmp = useAmp();
    return (
        <>
        <header>
            <section className="hero" id="hero">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="text col-lg-6 col-md-12">
                            <h3 className="h4 text-uppercase text-shadow text-thin">Die Agentur für anspruchsvolle Projekte!</h3>
                            <h1 className="text-shadow">Web Metropolis</h1>
                                <p>Wir sind die Agentur für Internetprojekte und 3D.</p>
                                <a href="#about" className="btn btn-light text-primary get-started link-scroll">
                                    About us
                                </a>
                        </div>
                            <div className="mockup col-lg-6 d-none d-lg-block">
                                {isAmp ? (
                                    <amp-img layout="responsive" width="1000" height="1333" quality="10" src="/img_webp/HeaderFoto_Alexander.webp" alt="Alexander Keil" />
                                ) : (
                                    <Image layout='responsive' width={1000} height={1333} quality="10" src="/img/HeaderFoto_Alexander.png" alt="Alexander Keil"/> 
                                )}                              
                            </div>
                    </div>
                </div>
                </section>   
        </header>
        <main>
            <SectionAbout />
            <SectionNews />
            <SectionService />
            <SectionPortfolio />
         
                
        </main>
            {/* <NextScript /> */}
            <script src="./font_icons/svgxuse.js"></script>
        </>    
    )
}

export default MainPage