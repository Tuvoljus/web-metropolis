import Link from 'next/link'
import Image from 'next/image'
import { useAmp } from 'next/amp'


export const config = { amp: 'hybrid' }

const SectionAbout = () => {    
    return (
        <>
            
               
            <section id="about" className="about">               
                <div className="container text-center">
                    <header>
                    <h1 className="small-heading">About Us</h1>
                    <h2>Vielseitig.</h2>
                    </header>
                    <p className="lead">
                        Wir sind eine frische Agentur, gegründet im Januar 2021,
                        mit Professionals aus dem Bereich Webentwicklung, Design, 3D und Video Produktion
                        und können das Wissen aus 15 Jahren nach Bedarf bündeln.
                    </p>
                </div>
            </section>
        </>
    )
}

export default SectionAbout