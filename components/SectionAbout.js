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
                    <h2>Lorem ipsum dolor sit amet</h2>
                    </header>
                    <p className="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim iste natus error sit voluptatem accusantium doloremque.</p>
                </div>
            </section>
        </>
    )
}

export default SectionAbout