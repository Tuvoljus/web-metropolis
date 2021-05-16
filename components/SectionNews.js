import Link from 'next/link'
import Image from 'next/image'
import { useAmp } from 'next/amp'


export const config = { amp: 'hybrid' }

const SectionNews = () => {    
    return (
        <>
            
               
            <section id="news" className="news" style={{paddingTop: '0rem'}}>               
                <div className="container text-center" style={{borderTop: 'solid 2px'}}>
                    <header style={{marginTop: '3rem'}}>
                    <h1 className="small-heading">News</h1>
                    <h2>Neuigkeiten</h2>
                    </header>
                    <p className="lead">
                        Wir freuen uns auf unseren neuen Kunden Bernhard Käser - ein erfolgreicher und bekannter Physiotherapeut aus München am Sendlicher Tor.<br />
                        Für Ihn erneuern wir seine 2 Internetseiten, welche einen neuen Anstrich benötigen.<br />
                        <Link href="https://www.vitas-institut.de/">
                            <a>
                                Vitas Institut
                            </a>
                            
                        </Link> 
                            <p>&</p>
                        <Link href="https://www.vitas-stressmanagement.de">
                            <a>
                                Vitas Stressmanagement
                            </a>
                            
                        </Link> 
                    </p>
                </div>
            </section>
        </>
    )
}

export default SectionNews